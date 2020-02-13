package service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import utils.Constants;

@Service("emailService")
public class EmailService {

	private JavaMailSender mailSender;

	@Autowired
	public EmailService(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

	static Logger log = Logger.getLogger(EmailService.class);

	/*
	 * @Async public void sendSimpleEmail(String toEmail, String mailSubject, String
	 * mailbody) {
	 * 
	 * SimpleMailMessage email = new SimpleMailMessage(); email.setTo(toEmail);
	 * email.setSubject(mailSubject); email.setText(mailbody);
	 * 
	 * mailSender.send(email); }
	 */
	@Async("threadPoolTaskExecutor")
	public void sendEmail(String toEmail, String mailSubject, String mailbody) {

		MimeMessage message = mailSender.createMimeMessage();

		try {
			message.setSubject(mailSubject);

			message.setContent(mailbody, "text/html");
			message.addRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
			log.info("Invoking an asynchronous method. " + Thread.currentThread().getName());
			mailSender.send(message);

		} catch (MessagingException e) {

			log.error("Messaging exception in sending mail" + e.getMessage());
		} catch (Exception e) {

			log.error("Exception in sending mail" + e.getMessage());
		}
	}

	public JavaMailSender getMailSender() {
		return mailSender;
	}

	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

}