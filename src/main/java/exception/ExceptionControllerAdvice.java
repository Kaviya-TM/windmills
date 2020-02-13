package exception;

import java.io.IOException;
import java.sql.SQLException;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class ExceptionControllerAdvice {

	static Logger log = Logger.getLogger(ExceptionControllerAdvice.class);
	
	@ExceptionHandler(NullPointerException.class)
	public ModelAndView handleNullPointerException(NullPointerException ex, HttpServletRequest request) {
		log.error("NullPointerException handler executed:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}

	

	@ExceptionHandler(MessagingException.class)
	public ModelAndView handleMessagingException(MessagingException ex, HttpServletRequest request) {
		log.error("MessagingException handler executed:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}

	@ExceptionHandler(EncryptedDocumentException.class)
	public ModelAndView handleEncryptedDocumentException(EncryptedDocumentException ex, HttpServletRequest request) {
		log.error("EncryptedDocumentException handler executed:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}
	
	
	@ExceptionHandler(InvalidFormatException.class)
	public ModelAndView handleInvalidFormatException(InvalidFormatException ex, HttpServletRequest request) {
		log.error("InvalidFormatException handler executed:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}
	
	
	@ExceptionHandler(IOException.class)
	public ModelAndView handleIOException(IOException ex, HttpServletRequest request) {
		log.error("IOException handler executed:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}
	@ExceptionHandler(SQLException.class)
	public ModelAndView handleSQLException(HttpServletRequest request, Exception ex) {
		log.error("SQLException Occured:: URL=" + request.getRequestURL() + ex.getMessage());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;
	}
	@ExceptionHandler(Exception.class)
	public ModelAndView handleException(HttpServletRequest request, Exception ex) {
		log.error("Exception handler executed" + ex.getMessage() + "URL=" + request.getRequestURL());
		ModelAndView model = new ModelAndView();
		model.addObject("errMsg", ex.getMessage());
		model.setViewName("error");
		return model;

	}
	

}