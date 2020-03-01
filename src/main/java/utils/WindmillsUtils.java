package utils;

import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.apache.commons.io.FilenameUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.springframework.web.multipart.MultipartFile;

public class WindmillsUtils {
	
	public  static String generateToken()
	{		
		String token=UUID.randomUUID().toString();
		return token;
	}
	public static String generateDocumentCode(int id) {
		
		String unixTime = String.valueOf(System.currentTimeMillis()).concat(String.valueOf(id));
		long time = Long.parseLong(unixTime);
		String code = Long.toHexString(time).toUpperCase();
		return code;

	}
	
	public static void fileupload(List<MultipartFile> files,Map<String, String> docmap) throws IllegalStateException, IOException
	
	{
		if(!files.isEmpty())
		
		{for (MultipartFile file : files) {
			String extension = FilenameUtils.getExtension(file.getOriginalFilename());
			String path = Constants.DOCUMENT_PATH + File.separator + docmap.get(file.getOriginalFilename())+"."+extension;
			File destinationFile = new File(path);
			file.transferTo(destinationFile);

		}
		}
	}

}
