var Employee = function(name, level, years) {
	this.name = name;
	this.level = level;
	this.years = years;

	this.getBaseSalary = function() {
		switch(level) {
			case 'intern':
				return 40000;
			case 'associate':
				return 60000;
			case 'manager':
				return 80000;
			case 'executive':
				return 100000;
			case 'director':
				return 120000;
		}
	};

	this.getBenefits = function() {
		this.baseSalary = this.getBaseSalary();
		if (this.years < 3) {
			return 0;
		}
		else if (this.years < 5) {
			return this.baseSalary * 0.2;
		}
		else if (this.years < 7) {
			return this.baseSalary * 0.3;
		}else if (this.years < 9) {
			return this.baseSalary * 0.4;
		}
		else {
			return this.baseSalary * 0.5;
		}
	};

	this.salary = this.getBaseSalary() + this.getBenefits();

	this.getSalaryReport = function() {
	  return this.name + " earns " + this.salary.toString() + " monthly. This includes a Basic Salary of N" + this.getBaseSalary().toString() + " and N" + this.getBenefits().toString() + " as benefits.";
	};
	
	this.salaryReport = this.getSalaryReport();
};


var button= document.getElementById("submit");

function displayDetails(){
    var names =document.getElementById("name").value,
	years=Number(document.getElementById("exp").value),
	level=document.getElementById("cadreSelection").value;    
    console.log("Clicked");
    console.log(names, years, level);
    if (!names || !level || years ===1){
        alert( "you missed filling a detail or some details");
    }else if (typeof name !=="string"){        
        alert( "name should be atleast 3 characters");          
    }else{
        document.getElementById("report-name").innerHTML= "Name: " + names;
        document.getElementById("report-cadre").innerHTML="Level: " + level;
        document.getElementById("report-years").innerHTML= "Years Of Experience: " + years;
        var sal= new Employee(names, level, years);
        document.getElementById("report-summary").innerHTML= "Salary summary: " + sal.salaryReport;
        document.getElementById("report").style.display="block";
    }
}

button.addEventListener("click", displayDetails, false);