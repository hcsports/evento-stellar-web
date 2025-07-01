const express = require('express');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 3001;

// Segurança HTTP
app.use(helmet());

// CORS para permitir requisições do seu frontend
app.use(cors({
  origin: '*', // substitua por seu domínio na produção para ficar mais seguro
}));

// Limite de tamanho do payload
app.use(express.json({ limit: '10kb' }));

// Rate limit: 5 tentativas a cada 10 minutos por IP
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5,
  message: 'Muitas tentativas, por favor tente novamente mais tarde.',
});
app.use('/api/sendEmail', limiter);

// Rota com validação e sanitização
app.post(
  '/api/sendEmail',
  [
    body('name').trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('phone').trim().escape(),
    body('message').trim().escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: 'Campos inválidos' });
    }

    const { name, email, phone, message } = req.body;

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Contato via Site HC Sports</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const msg = {
      to: 'contato@hcsports.com.br',
      from: 'formulario@hcsports.com.br',
      subject: 'Novo contato via site',
      html: htmlTemplate,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ 
        success: true, 
        message: 'Email enviado com sucesso' 
      });
    } catch (err) {
      return res.status(500).json({ 
        success: false, 
        message: err.message || 'Erro ao enviar email',
        error: err,
        errorCode: err.code,
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
