package dao;

import java.util.List;
import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;

import javassist.convert.Transformer;
import model.ClientDetails;
import model.Community;
import model.Documents;
import model.Listings;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import model.ValuationReportForm;


@Repository
public class ValuationDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ValuationDaoImpl.class);

	public List<ClientDetails> getClient() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct clientName from  ClientDetails");
		List<ClientDetails> rows=query.list();
		return rows;
	}

	public List<ServiceOfficer> getServiceOfficer(String email) {
		Query query = sessionFactory.getCurrentSession().createQuery("from  ServiceOfficer s where s.email!=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}
	public void uploaddocuments(Documents document) {
		sessionFactory.getCurrentSession().save(document);
	}
	public void updatedocuments(Documents document) {
		log.info("update");
		sessionFactory.getCurrentSession().save(document);
	}
	public void deletedocuments(Documents document) {
		log.info("delete");
		sessionFactory.getCurrentSession().delete(document);
	}
	public List<Object[]> getDocumentCount(List<Integer> reportId)
	{
		Query query=sessionFactory.getCurrentSession().createQuery("select doc.reportId,count(doc.reportId),doc.valuation.reportId from Document doc where doc.reportId IN :reportId group by doc.reportId");
		query.setParameterList("reportId", reportId);
		List<Object[]> rows=query.list();
		return rows;
	}
    public List<ServiceOfficer> getDefaultServicer(String email) {
    	Query query=sessionFactory.getCurrentSession().createQuery("from ServiceOfficer s where s.email=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}

	public List<ClientDetails> getValuationInstructingPerson(String clientName) {
    	Query query=sessionFactory.getCurrentSession().createQuery("select contactPerson from ClientDetails s where s.clientName=:clientName");
    	query.setParameter("clientName",clientName);
		List<ClientDetails> rows=query.list();
		return rows;
	}

	public void saveValuationReport(ValuationReport valuationreport) {
		sessionFactory.getCurrentSession().save(valuationreport);
	}

	public int getNumberOfRows() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport");
		List<ValuationReport> rows=query.list();
		int row = rows.size() + 1;
		return row;
	}

	public List<Property> getValuationApproach(String propertyValued) {
    	Query query=sessionFactory.getCurrentSession().createQuery("from Property s where s.propertyValued=:propertyValued");
		query.setParameter("propertyValued",propertyValued);
		List<Property> rows=query.list();
		return rows;
	}

	public List<Property> getPropertyValued() {
		Query query = sessionFactory.getCurrentSession().createQuery("from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<Community> getCommunity() {
		Query query = sessionFactory.getCurrentSession().createQuery("from  Community");
		List<Community> rows=query.list();
		return rows;
	}

	public List<Community> getCommunityList(String community) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Community s where s.community=:community");
		query.setParameter("community",community);
		List<Community> rows=query.list();
		return rows;
	}

	public List<Community> getCity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct city from  Community");
		List<Community> rows=query.list();
		return rows;
	}

	public List<Property> getApproachReasoningList() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct approachReasoning from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<Property> getValuationApproachList() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct valuationApproach from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<ValuationReport> getValuationReportList() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport");
		List<ValuationReport> rows = query.list();
		return rows;
	}
	
	public List<ValuationReport> getValuation(int reportId) {
		System.err.println("delete");
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport s where s.reportId=:reportId");
		query.setParameter("reportId",reportId);
		List<ValuationReport> rows=query.list();
		return rows;
	}
	public List<Documents> deleteDocuments(int reportId) {
		
		Query query=sessionFactory.getCurrentSession().createQuery("delete from Documents d where d.valuation.reportId=:reportId");
		query.setParameter("reportId",reportId);
		List<Documents> rows= query.list();
		return rows;
	}
	public List<Documents> getDocuments(int reportId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Documents d where d.valuation.reportId=:reportId");
		query.setParameter("reportId",reportId);
		List<Documents> rows= query.list();
		return rows;
	}

	public void editValuation(ValuationReport valuationreport) {
		 sessionFactory.getCurrentSession().update(valuationreport);
	}

	public void editValuationReport(ValuationReport valuationreport,int reportId) {
		System.err.println("Enter");
		System.err.println("ac0"+valuationreport.getAcType());
		System.err.println("reportId"+reportId);
		 sessionFactory.getCurrentSession().update(valuationreport);
//			String hql = "UPDATE ValuationReport SET acType = :acType WHERE reportId = :reportId";
//			Query query=sessionFactory.getCurrentSession().createQuery(hql);
//			query.setParameter("reportId", valuationreport.getReportId());
//			query.setParameter("acType", valuationreport.getAcType());
//			query.executeUpdate();
			System.err.println("Success");
			
	}

	public List<SoldTransactions> getEverything(String buildingName) {
		Query query=sessionFactory.getCurrentSession().createQuery("from SoldTransactions s where s.buildingName=:buildingName");
		query.setParameter("buildingName",buildingName);
		List<SoldTransactions> rows=query.list();
		return rows;
	}

	public List<ValuationReport> getReference() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport order by reportId DESc");
		query.setMaxResults(20);
		List<ValuationReport> rows=query.list();
		return rows;
	}

	public List<Property> getCategory() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct propertyCategory from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<Listings> getCommunityListingList(String city) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct community from Listings s where s.city=:city");
		query.setParameter("city",city);
		List<Listings> rows=query.list();
		return rows;
	}
	
	public List<Listings> getSubCommunityListingList(String community) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct subCommunity from Listings s where s.community=:community");
		query.setParameter("community",community);
		List<Listings> rows=query.list();
		return rows;
	}
	
	public List<Listings> getBuildingLiist(String subCommunity) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct buildingName from Listings s where s.subCommunity=:subCommunity");
		query.setParameter("subCommunity",subCommunity);
		List<Listings> rows=query.list();
		return rows;
	}

	
}
