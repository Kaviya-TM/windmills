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
	

}
