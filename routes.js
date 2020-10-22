const { Router } = require('express');

const { authController } = require('./controllers');
const { checkAccessTokenMiddleware } = require('./midllewares');

const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/refresh-tokens', authController.refresh);
authRouter.post('/logout', checkAccessTokenMiddleware, authController.logout);
authRouter.post('/forgot', authController.forgot);
authRouter.get('/reset/:token', authController.checkResetPasswordToken);
authRouter.post('/reset/:token', authController.resetPasswordByToken);


module.exports = authRouter;
