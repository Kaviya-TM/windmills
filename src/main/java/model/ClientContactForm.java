package model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
@Component
public class ClientContactForm {
	
	private ClientDetails clientdetails;
	private List<ClientContact> clientContactlist = new ArrayList<ClientContact>();
	
	public ClientDetails getClientDetails() {
		return clientdetails;
	}
	public void setClientDetails(ClientDetails clientdetails) {
		this.clientdetails = clientdetails;
	}
	public List<ClientContact> getClientContactlist() {
		return clientContactlist;
	}
	public void setClientContactlist(List<ClientContact> clientContactlist) {
		this.clientContactlist = clientContactlist;
	}
	
}
