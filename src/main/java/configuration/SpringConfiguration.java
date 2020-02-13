package configuration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.Executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.Ordered;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;



@Configuration
@EnableWebMvc
@EnableAsync 
@ComponentScan(basePackages = { "controller", "service", "dao", "model","exception" })
@PropertySource("classpath:application.properties")
public class SpringConfiguration extends WebMvcConfigurerAdapter {
	
	@Autowired
	private Environment env;


	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver vr = new InternalResourceViewResolver();
		vr.setPrefix("/WEB-INF/views/");
		vr.setSuffix(".jsp");
		return vr;

	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}

	
	@Bean(name = "multipartResolver")
    public CommonsMultipartResolver getResolver() throws IOException {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        // no limit
        resolver.setMaxUploadSize(-1);
        return resolver;
	}
	 
	 @Bean
	 public JavaMailSender getJavaMailSender() {
	     JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	     mailSender.setHost(env.getProperty("mail.host"));
	     mailSender.setPort(Integer.parseInt(env.getProperty("mail.port")));
	      
	     mailSender.setUsername(env.getProperty("mail.username"));
	     mailSender.setPassword(env.getProperty("mail.password"));
	      
	     Properties prop = new Properties();
	     
	     //props.put("mail.transport.protocol", "smtp");
	     //props.put("mail.smtp.auth", "true");
	     //props.put("mail.smtp.starttls.enable", "true");
	     //props.put("mail.debug", "false");
	     //props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
	     //props.put("mail.debug",true);
	     //prop.put("mail.smtp.port", "465");
	     //prop.put("mail.smtp.auth", "true");
	     //prop.put("mail.smtp.socketFactory.port", "465");
	     // prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
	     mailSender.setJavaMailProperties(mailProperties());
	     return mailSender;
	 }
	 
	 
	 Properties mailProperties()
	 {
			return new Properties() {
				{
					//setProperty("mail.transport.protocol", env.getProperty("mail.transport.protocol"));
					setProperty("mail.smtp.auth", env.getProperty("mail.smtp.auth"));
					setProperty("mail.smtp.starttls.enable", env.getProperty("mail.smtp.starttls.enable"));
					//setProperty("mail.debug",env.getProperty("mail.debug"));
					setProperty("mail.smtp.ssl.trust", env.getProperty("mail.smtp.ssl.trust"));
					
					
					
					  
					
					 
				}
			};
		}
	
	 
	 @Bean(name = "threadPoolTaskExecutor")
	    public Executor threadPoolTaskExecutor() {
	        return new ThreadPoolTaskExecutor();
	    }
	 public MappingJackson2HttpMessageConverter jacksonMessageConverter(){
		    MappingJackson2HttpMessageConverter messageConverter = new  MappingJackson2HttpMessageConverter();

		    ObjectMapper mapper = new ObjectMapper();
		    //Registering Hibernate4Module to support lazy objects
		    mapper.registerModule(new Hibernate4Module());

		    messageConverter.setObjectMapper(mapper);
		    return messageConverter;

		} 
	 
	 @Override
	 public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	     //Here we add our custom-configured HttpMessageConverter
	     converters.add(jacksonMessageConverter());
	     super.configureMessageConverters(converters);
	 }
	 
}
