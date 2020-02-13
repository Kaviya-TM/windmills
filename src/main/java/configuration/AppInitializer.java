package configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		
		return new Class[] {HibernateConfiguration.class,SpringSecurityConfiguration.class,SpringConfiguration.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
	
		return new Class[] {};
	}

	@Override
	protected String[] getServletMappings() {
		
		return new String[] {"/"};
	}

}
