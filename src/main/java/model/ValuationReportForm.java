package model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
@Component
public class ValuationReportForm {
	
	private ValuationReport valuationReport;
	private List<Documents> documents = new ArrayList<Documents>();
	private List <MultipartFile> files=new ArrayList<MultipartFile>();
	
	public ValuationReport getValuationReport() {
		return valuationReport;
	}
	public void setValuationReport(ValuationReport valuationReport) {
		this.valuationReport = valuationReport;
	}
	public List<Documents> getDocuments() {
		return documents;
	}
	public void setDocuments(List<Documents> documents) {
		this.documents = documents;
	}
	public List<MultipartFile> getFiles() {
		return files;
	}
	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}
	
	
}
