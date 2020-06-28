
import java.util.*;
import java.io.*;

public class Accounts {
	
	//this will check if the user can sign in or not
	String validatePassword(String un, String ps) throws Exception{
		Scanner accs = new Scanner(new File("Accounts.txt"));
		boolean login = false;
		boolean found = false;
		while(accs.hasNextLine()){
			String usern = accs.next();
			if(usern.equals(un) && ps.equals(accs.next())) { //&& ps.equals(ac.get(un))) {
				login = true;
			}
			else if(usern.equals(un)) {
				found = true;
			}
			if(accs.hasNextLine()) accs.next();
		}
		accs.close();
		
		if(found != true && login != true) {
			newAccount(un, ps);
			login = true;
		}
		
		String log = "false";
		if(login == true) {
			log = "true";
		}
		
		return log;
	}
	
	
	void newAccount(String un, String ps) throws Exception{
		File f = new File("Accounts.txt");
		FileWriter fr = new FileWriter(f, true);
		fr.write("\n");
		fr.write(un);
		fr.write(" ");
		fr.write(ps);
		fr.close();
		String fName = un + "-emt" + ".txt";
		File creatingFile = new File(fName);
		creatingFile.createNewFile();
		System.out.println("You did not have an account before. Your account has "
				+ "now been created.");
	}
	
	List<String> accessEmotionsFile(String un) throws Exception{
		String fName = un + "-emt" + ".txt";
		Scanner access = new Scanner(new File(fName));
		//create a list that tracks each day's emotions by accessing their file
		List<String> emotions = new ArrayList<>();
		while(access.hasNextLine()) {
			emotions.add(Integer.toString(access.nextInt()) + " " + access.next());
		}
		access.close();
		return emotions;
	}
	
	List<String> writeEmotionsFile(String un, String emotion) throws Exception{
		String fName = un + "-emt" + ".txt";
		Scanner write = new Scanner(new File(fName));
		int num = 1;
		//count so that we know the day number
		int count = 1;
		while(write.hasNextLine()) {
			if(num == 1) {
				write.nextInt();
			}
			else{
				write.next();
				count++;
			}
			num *= -1;
		}
		write.close();
		if(count == 0) count++;
		
		//now actually write the new emotion
		File f = new File(fName);
		FileWriter fr = new FileWriter(f, true);
		if(count > 1) fr.write("\n");
		fr.write(count + " " + emotion);
		fr.close();
		
		Scanner access = new Scanner(new File(fName));
		List<String> emotions = new ArrayList<>();
		while(access.hasNextLine()) {
			int n = access.nextInt();
			String s = access.next();
			emotions.add(n + " " + s);
		}
		access.close();
		return emotions;
	}
	
	
	/*List<String> writeEmotionsFile(String un, String date, String emotion) throws Exception{
		String fName = un + "-emt" + ".txt";
		Scanner write = new Scanner(new File(fName));
		int num = 1;
		//count so that we know the day number
		float count = 1;
		while(write.hasNextLine()) {
			/*if(num == 1) {
				write.nextInt();
			}
			//else{
				write.next();
				count += 0.5;
			//}
			num *= -1;
		}
		write.close();
		if(count == 0) count++;
		
		//now actually write the new emotion
		File f = new File(fName);
		FileWriter fr = new FileWriter(f, true);
		if(count > 1) fr.write("\n");
		fr.write(date + " " + emotion);
		fr.close();
		
		Scanner access = new Scanner(new File(fName));
		List<String> emotions = new ArrayList<>();
		while(access.hasNextLine()) {
			//int n = access.nextInt();
			String n = access.next();
			String s = access.next();
			emotions.add(n + " " + s);
		}
		access.close();
		return emotions;
	}*/

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		System.out.println("hi");
		Accounts a = new Accounts();
		String un = "ravi1";
		String ps = "desigan1";
		//String un = "ravi2";
		//String ps = "1";
		String tf = a.validatePassword(un, ps);
		if(tf == "false") {
			System.out.println("wrong password");
			return;
		}
		
		List<String> written = a.writeEmotionsFile(un, "happy");
		for(int b = 0; b < written.size(); b++) {
			System.out.print(written.get(b) + ", ");
		}
		
		System.out.println("");
		
		List<String> emotions = a.accessEmotionsFile(un);
		for(int c = 0; c < emotions.size(); c++) {
			System.out.print(emotions.get(c) + ", ");
		}
		System.out.println(tf);
	}

}

//String directPath = "‎⁨Macintosh HD⁩/⁨Users⁩/student⁩/eclipse-workspace⁩/⁨Misc/⁩";
//String directPath = "Users⁩/⁨student⁩/⁨Desktop⁩/⁨mentalhealth⁩/java⁩";
//String fileName = "Accounts.txt";
//String totalName = directPath + fileName;

//Scanner accs = new Scanner(new File(totalName));
//int n = accs.nextInt();
//System.out.println(n);
//System.out.println("hello world " + accs.next());

/*if(accs.hasNextLine()) a = accs.next();
//System.out.println(a);
if(accs.hasNextLine()) b = accs.next();
ac.put(a, b);
if(accs.hasNextLine()) accs.next();*/

/*if(login == false && unFound == true) {
	newAccount(un, ps);
}*/

//boolean login = false;

//now, check if the account is already there or not to decide if we need a new account
/*if(ac.containsKey(un)){
	//System.out.println(ac.get(un));
	if(ps.equals(ac.get(un))){
		//the person was able to login
		login = true;
	}
	else{

	}
}
else {
	newAccount(un, ps);
}*/



//BufferedWriter bw = new BufferedWriter(fr);
//bw.newLine();


