var a=parseInt(prompt("Enter the month in number"));
var b=parseInt(prompt("Enter the year in number"));

switch(true){

  case a==1||a==3||a==5||a==7||a==8||a==10||a==12:
    document.write("31 days in a month");
    break;

  case a==4||a==6||a==9||a==11:
    document.write("30 days in a month");
    break;

  case a==2 && b%4==0:
    document.write("29 days in a month");
    break;
  
    case a==2 && b%4!=0:
        document.write("28 days in a month");
      break;

    default:
        document.write("enter a valid month");

}