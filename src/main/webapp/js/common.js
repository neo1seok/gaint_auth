/******************************************************** 
   ���ϸ� : common.js
*********************************************************/ 
function buttonStyleFix() {
 var tblButton = document.getElementById("tblButton");
 if(tblButton) {
  if(tblButton.childNodes && tblButton.childNodes.length) {
   for(i=0; i < tblButton.childNodes.length; i++ ) {
    if(tblButton.childNodes[i].style && tblButton.childNodes[i].style.visibility && tblButton.childNodes[i].style.visibility == 'hidden') {
      tblButton.childNodes[i].style.display = 'none';
    }
   }
  }
 }
} 

function delChar(str, ch){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ����� Ư�����ڸ� ������ ���ο� ���ڿ��� �����.
    * str    : ���ڿ�
    * ch    : ������ ����
    ***********************************************************************************************************
    */
 var len = str.length;
 var ret = "";
 
 //���ڿ����� ch ���ڸ� �����Ѵ�. ��) ,  - ���
 for (i=0; i<len; ++i)
 {
  if (str.substring(i,i+1) != ch)
   ret = ret + str.substring(i,i+1);
 }
 
 return ret;
}

function replace(str,oldChar,newChar){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ����� Ư�����ڸ� �ٸ� ���ڷ� ġȯ�� ���ο� ���ڿ��� �����.
    * str    : ���ڿ�
    * oldChar   : �ٲٱ� ���� ����
    * newChar   : �ٲ㼭 ���� ����
    ***********************************************************************************************************
    */
    var oldstr="";
    
    while(oldstr!=str){
     oldstr=str;
     str=str.replace(oldChar,newChar);
    }

 return str;
}


function lTrim(str){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ����� ������ ������ �����Ѵ�.
    * str    : ���ڿ�
    ***********************************************************************************************************
    */
  var i;
  i = 0;
  while (str.substring(i,i+1) == ' ' || str.substring(i,i+1) == '��')  i = i + 1;
  return str.substring(i);
}

function rTrim(str){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ����� �������� ������ �����Ѵ�.
    * str    : ���ڿ�
    ***********************************************************************************************************
    */


  var i = str.length - 1;
  while (i >= 0 && (str.substring(i,i+1) == ' ' || str.substring(i,i+1) == '��')) i = i - 1;
  return str.substring(0,i+1);
}

function trim(str){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ����� ������ ������ �����Ѵ�.
    * str    : ���ڿ�
    ***********************************************************************************************************
    */
    if( str == "" || str.length ==0 ) 
    {
      return str; 
    } 
    else
    {
      return(lTrim(rTrim(str)));
    }   
}

 

//�����ʿ� ch ���� ä���

function rPadString(str, ch, len){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ��� ������ ���̸�ŭ �������� Ư�� ���ڷ� ä���.
    * str    : ���ڿ�
 * len    : �ѱ���
    ***********************************************************************************************************
    */
 var strlen = trim(str).length;
 var ret = "";
 var alen = len - strlen;
 var astr = ""; 
 
 //������ ���ڸ�ŭ  len ũ��� ch ���ڷ� ä���
 for (i=0; i<alen; ++i)
 {
  astr = astr + ch;
 }
 
 ret = trim(str) + astr; //�ڿ��� ä���
 return ret;
}

function lPadString(str, ch, len){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ��� ������ ���̸�ŭ ������ Ư�� ���ڷ� ä���.
    * str    : ���ڿ�
 * len    : �ѱ���
    ***********************************************************************************************************
    */
 var strlen = trim(str).length;
 var ret = "";
 var alen = len - strlen;
 var astr = ""; 
 
 
 //������ ���ڸ�ŭ  len ũ��� ch ���ڷ� ä���
 for (i=0; i<alen; ++i)
 {
  astr = astr + ch;
 }
 
 ret = astr + trim(str); //�տ��� ä���
 return ret;
}

function formatComma(argStr){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڸ� ���ڸ����� �ĸ��� ���� �������� �ٲپ� �ش�.
    * argStr    : argument
    ***********************************************************************************************************
    */
 if (argStr == null)  return;
 var argStr = argStr + ""; //������ ��� ���ڿ��� ��ȯ
 var rule = /[^0-9-.]/g;  // ����, ��ȣ �� �Ҽ��� �̿��� ������ ����

 argStr = getFilledCommaStr(argStr.replace(rule, ""));
 return argStr;
}

function getFilledCommaStr(argNumber) {
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ� õ������ ','�� �ٿ��� ��ȯ
    * argNumber   : ����
    ***********************************************************************************************************
    */
        argNumber = argNumber.toString();

        if (isEmpty(argNumber))  return argNumber;

        // ���� �׸񿡼� ��ȣ(-), �Ҽ���(.) üũ
        var sourceStr = trim(argNumber);
        var signStr   = ""
        var dotStr    = "";

        if (sourceStr.substring(0, 1) == "-") {
            signStr   = "-";
            sourceStr = sourceStr.substring(1, sourceStr.length);
        }
        if (sourceStr.indexOf(".") >= 0) {
            dotStr    = sourceStr.substring(sourceStr.indexOf("."), sourceStr.length);
            sourceStr = sourceStr.substring(0, sourceStr.indexOf("."));
        }

        var sourceLen = sourceStr.length;
        var filledStr = "";
        var checkIdx  = 0;

        for (var idx = sourceLen - 1; idx >= 0; idx--) {
            if (checkIdx++ % 3 == 0 && idx != sourceLen -1) {
                filledStr = "," + filledStr;
                checkIdx = 1;
            }
            filledStr = sourceStr.substring(idx, idx + 1) + filledStr;
        }
        return signStr + filledStr + dotStr;
}

function formatDate(str,mark){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ��¥�������� ��,��,�� ���̿� �����ڸ� �־��ش�.
    * str       : ��¥�� YYMMDD�������� ����ִ� ���ڿ�
    * mark   : ��,��,�� ���̿� �� ������
    ***********************************************************************************************************
    */
 if(str != "" && str.length == 8) {
  return str.substring(0,4)+mark+str.substring(4,6)+mark+str.substring(6,8);
 }  else {
  return "";
 }
}

function setToday(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���ó�¥�� ä���ش�.
    *
    * field    : html���� name���� ������ �Է��ʵ��� ��
    *
    * ��뿹
    ****************************************************************************************************
    */
 var cDate=new Date();
 var year=cDate.getYear();
 var month=(cDate.getMonth()+1).toString();
 month=month.length==1?"0"+month:month;
 var day=cDate.getDate().toString();
 day=day.length==1?"0"+day:day;
 field.value="" +year+month+day;
}

function setMonthFirstDay(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� �̹����� ù���� ä���ش�..
    *
    * field    : html���� name���� ������ �Է��ʵ��� ��
    *
    * ��뿹
    ****************************************************************************************************
    */
 var cDate=new Date();
 var year=cDate.getYear();
 var month=(cDate.getMonth()+1).toString();
 month=month.length==1?"0"+month:month;
    var day="01";
 field.value="" +year+month+day;
}

function setYearFirstDay(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���� 1��1�Ϸ� ä���ش�.
    *
    * field    : html���� name���� ������ �Է��ʵ��� ��
    *
    * ��뿹
    ****************************************************************************************************
    */

    var cDate=new Date();
    var year=cDate.getYear();
    var month="01";
    var day="01";
    field.value="" +year+month+day;
}

function setOneMonthBefore(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���ú��� �Ѵ����� ��¥�� ä���ش�..
    *
    * field    : html���� name���� ������ �Է��ʵ��� ��
    *
    * ��뿹
    ****************************************************************************************************
    */
 var cDate=new Date();
 var year=cDate.getYear();
 var month=(cDate.getMonth()).toString();
 month=month.length==1?"0"+month:month;
 if (month=="00"){
  month="12";
  year--;
 }
 var day=cDate.getDate().toString();
 day=day.length==1?"0"+day:day;
 field.value="" +year+month+day;
}

function setOneYearBefore(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���ú��� 1������ ��¥�� ä���ش�..
    *
    * field    : html���� name���� ������ �Է��ʵ��� ��
    *
    * ��뿹
    ****************************************************************************************************
    */
 var cDate=new Date();
 var year=cDate.getYear()-1;
 var month=(cDate.getMonth()+1).toString();
 month=month.length==1?"0"+month:month;
 var day=cDate.getDate().toString();
 day=day.length==1?"0"+day:day;
 field.value="" +year+month+day;
}

function isEmpty(str){
    /*
    *********************************************************************************************************
    *   �Լ�����  : ���ڿ��� ���ڿ� Ȥ�� ���鸸 �ִ� ���ڿ����� �˻��Ѵ�.
    * str    : ���ڿ�
    ***********************************************************************************************************
    */
 if (trim(str) == '') return true;
 return false;

}

function isContains(str,ch){
    /*
    *********************************************************************************************************
    *   �Լ�����: ���ڿ��� Ư�����ڿ��� �����ϰ� �ִ��� üũ�Ѵ�.
    * str    : Ư������ ���Կ��θ� üũ�� ��� ���ڿ�
    * ch    : ������ Ư������
    * 
    ***********************************************************************************************************
    */
     var i=0;
     for(i=0;i < str.length;i++){
     if(str.charAt(i)==ch) return true;
     }
     return false;
}


function isContainsOnly(str,chars) {
    /*
    *********************************************************************************************************
    *   �Լ�����  : �ش繮�ڿ��� ������ ���ڵ鸸�� �����ϰ� �ִ��� �˻��Ѵ�.
    * str    : �˻��� ���ڿ�
    * chars   : ������ ���ڵ��� ����
    ***********************************************************************************************************
    */     
    for (var inx = 0; inx < str.length; inx++) {
       if (chars.indexOf(str.charAt(inx)) == -1)
       return false; 
    }
    return true;
}

function isUnderMaxLen(strName,str , maxLen){
    /*
    *********************************************************************************************************
    *   �Լ�����: ���ڿ��� ���ڼ�üũ�� �Ѵ�. checkInputLength ���� �Լ� ������ ȣ��ȴ�.
    *   StrName : ���ڼ� üũ�� �� ���ڿ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * str    : ���� �� üũ�� �� ���ڿ�
    * maxLen    : �ش� �ʵ��� �ִ���ڼ� (�ѱ�2,����1)
    * 
    ***********************************************************************************************************
    */
     var i, len=0;
     var korLen = maxLen / 2;
     

     
     
     
     for(i=0;i < str.length; i++) (str.charCodeAt(i) > 255)? len+=2:len++;
     if (maxLen < len) {
      alert(strName + "��(��) ����(����)"+maxLen+"��, �ѱ�"+korLen+"�ڱ����� �����մϴ�. ���� ���ڼ�(��������) : "+len);
      return false;
     }
     return true;
}

 

function isValidDay(year, month, day) {
    /*
    *********************************************************************************************************
    *   �Լ�����  : �����ϴ� ��,��,���� �޷»����� �����ϴ� ��¥���� �˻��Ѵ�.
    * year    : ��
    * month   : ��
    * day    : ��
    ***********************************************************************************************************
    */     
    var m = parseInt(month,10) - 1;
    var d = parseInt(day,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}

function checkInputLength(fieldCalledName,field,maxLen){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ѱ�2,��������1�� �������� �Է¶��� ���ڼ��� �˻��Ѵ�.
    *
    * fieldCalledName : ���ڼ� üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��
    *
    * ��뿹 <TEXTAREA NAME="testArea" ROWS="8" COLS="70" onkeyup="javascript:checkInputLength('�䳻��',this,50);"></TEXTAREA>
 *   ��¥�� �ֹε�Ϲ�ȣó�� ������ �ڸ����� �ִ���� ������  <input type=text..>���� maxlength �Ӽ����� �ִ���̸� ���� ������ ���� ��õ�Ѵ�.
    * ��, �ѱ�2��,����1�� �������� ���ڼ� �Է������� �� �ʿ䰡 ���� ���� input type=text ���� �� �Լ��� ��� �Ѵ�.
    ****************************************************************************************************
    */
    
 if(field.value != ""){

  if(isContains(field.value,"'")) {
      alert(" ' ���ڴ� ������ �ʽ��ϴ�.");
      field.focus(); 
   field.value=delChar(field.value,"'");
            field.select();
      return false;
  } 

  if(!isUnderMaxLen(fieldCalledName,field.value,maxLen)) {
      field.focus(); 
      field.value=field.value.substring(0,maxLen); 
      return false;
  }
 }
  
 return true;
}

function checkInputNumber(fieldCalledName,field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���ڸ��� �ԷµǴ��� üũ�Ѵ�.
    *
    * fieldCalledName : ���ڼ� üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    *
    * ��뿹
    ****************************************************************************************************
    */
 if(field.value != ""){
  if(!isContainsOnly(field.value, "0123456789")) {
    alert(fieldCalledName + "��(��) ���ڿ��� ���ڿ��� �Է��� �� �����ϴ�.");
  field.focus(); 
  field.value=field.value.substring(0,field.value.length-1); 
  return false;
  }
 }
    return true;
}


function checkNumber(fieldCalledName,field,min,max){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �Է¶��� ���������� ������ �������� ���ڰ� ���Դ��� �˻��Ѵ�.
    *
    * fieldCalledName : ���ڼ� üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    * min    : �ּҰ�
    * max    : �ִ밪
    *
    * ��뿹
    ****************************************************************************************************
    */

 field.value=trim(field.value);
 if(!checkInputNumber(fieldCalledName,field)) {
  return false;
 }


 var fieldNumber=parseInt(field.value);
 if ( !(fieldNumber>=min && fieldNumber<=max) )
 {
  alert(fieldCalledName+"�� ����" + parseInt(field.value)+ "�� [" + min + " ~ " + max + "] ������ ������ ��� �ֽ��ϴ�.");
  field.focus();
  return false;
 }
    return true;
}

function checkDate(fieldCalledName,field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: ���������� �Էµ� ��¥�� ���������� �˻��Ѵ�.
    *
    * fieldCalledName : ���ڼ� üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkDate('������',this);" >
    ****************************************************************************************************
    */
 field.value=trim(field.value);    
 if(!checkInputNumber(fieldCalledName,field)) {
  return false;
 }
 var year = field.value.substring(0, 4);
 var month = field.value.substring(4, 6);
 var day = field.value.substring(6,8);
 //alert(year+"�� "+month+"�� "+day+"��");

    if (year < 1900 || year >2037){
        alert('��¥�� �߸� �ԷµǾ����ϴ�. �⵵�� 1900�⿡�� 2037����� �Դϴ�.');
  field.select(); 
        return false;
    }
    if (month <1 || month > 12){
        alert('��¥�� �߸� �ԷµǾ����ϴ�. ���� 1������ 12������ �Դϴ�.');
  field.select(); 
        return false;
    }
    if (day < 1 ||  !isValidDay(year, month,day)){
        alert('��¥�� �߸� �ԷµǾ����ϴ�. '+ year+ "�� " +month+'������ '+ day+'���� �����ϴ�.');
  field.value=field.value.substring(0,field.value.length-2);
  field.select();         
        return false;
    } 
 return true;

}
function checkDateFromTo(fromField,toField){
    /* 
    ****************************************************************************************************
    *  �Լ�����: ���������� �Էµ� �����ϰ� ������ �� ��¥�� ���������� �˻��Ѵ�.
    *
    * fromField    : �������� �Է¶��� �ʵ� ��ü
    * ToField    : �������� �Է¶��� �ʵ� ��ü
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkDate('������',this);" >
    ****************************************************************************************************
    */
 if(!checkDate("��������",fromField) || !checkDate("��������",toField) ) {
 return false;
 }
 else if(fromField.value > toField.value){
 alert("�������ڰ� �������ں��� Ů�ϴ�");
 fromField.focus();
 fromField.select(); 
 return false; 
 }
 return true;

}


function checkNotEmpty(fieldCalledName,field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ʼ������� �ԷµǾ�� �ϴ� �Է¶��� ��������ų� ���� �ۿ� ���� ������ �˻��Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkDate('������',this);" >
    ****************************************************************************************************
    */
    if(isEmpty(field.value))
    {
     alert(fieldCalledName+"��(��) �ʼ������� �ԷµǾ�� �ϴ� ���̹Ƿ� ����θ� �� �˴ϴ�");
     field.focus();
     field.select();
     return false;
    }
    return true;
}

function checkRCN(field){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ش��ʵ尡 �ֹε�Ϲ�ȣ�� �������� �˻縦 �Ѵ�.
    *
    * field : html���� name���� ������ �Է��ʵ� ��ü
    *
    * ��뿹 :  <input type="text" value="" name='RCN' maxlength=13 onBlur="javascript:checkRCN(this);"
         onkeyup="javascript:checkInputNumber('�ֹε�Ϲ�ȣ',this);">
    *                   �������Ⱚ �˻� ��ũ��Ʈ���� ����
    ****************************************************************************************************
    */
 field.value=trim(field.value);
 if(!checkInputNumber("�ֹε�Ϲ�ȣ",field)) return false;  // ���ڷθ� �̷�� ���� ������ ������
 if(field.value.length!=13) {        // ���ڼ��� 13�ڸ��� �ƴ϶�� ������
  alert("�ֹε�Ϲ�ȣ �ڸ����� ���ڶ��ϴ�."); 
        field.focus();
        field.select();
  return false;
 }

 var sex = field.value.substring(6,7); 

 if(!isContainsOnly(sex,"1234")) { 
  alert("�ֹε�Ϲ�ȣ 8��° �ڸ��� ����ǥ�ð� ���� �ʽ��ϴ�."); 
        field.focus();
        field.select();
  return false;
 } 
 

 var year = field.value.substring(0, 2);
 var month = field.value.substring(2, 4);
 var day = field.value.substring(4,6);

 
 if ( sex=="1" || sex=="2" ) year="19"+year;
 if ( sex=="3" || sex=="4" ) year="20"+year;

 // alert(year+"�� "+month+"�� "+day+"��" + "�����ڵ��� "+ sex);

    if (!isValidDay(year, month,day)){       // ���ڸ��� ������� üũ
        alert("�ֹε�Ϲ�ȣ ���� ������� �κ��� �߸��Ǿ����ϴ�. "+ year+ "�� " +month+"�� "+ day+"���̶�� ���� �������� �ʽ��ϴ�.");
        field.focus();
        field.select();
        return false;
        }

 var mappingMulti=[2,3,4,5,6,7,8,9,2,3,4,5];
 var mustLastDigit=0;
 for (var i=0;i<12;i++)
 {
  mustLastDigit+= parseInt(field.value.substring(i,i+1))*mappingMulti[i];
 }
 mustLastDigit= (11-mustLastDigit%11)%10;
 if (field.value.substring(12,13)!=mustLastDigit) {   //�ֹε�Ϲ�ȣ �������ڸ� �˻�
  alert("��ȿ�� �ֹε�Ϲ�ȣ�� �ƴմϴ�."); 
        field.focus();
        field.select();
  return false; 
 }
 return true;
}

function checkTogetherText(fieldCalledName,field,maxLen,notNull){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ؽ�Ʈ�� �ʼ��Է¿���üũ�� ����üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    * maxlen    : ���Ǵ� ������ �ִ����
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkTogetherText('�׽�Ʈ�ʵ�',this,10,true);"
       onkeyup="javascript:checkInputNumber('�׽�Ʈ�ʵ�',this);" >
    ****************************************************************************************************
    */
 field.value=trim(field.value);
    
    if ( ( notNull==true) && checkNotEmpty(fieldCalledName,field) && checkInputLength(fieldCalledName,field,maxLen) ) {
     return true;
    }
 
 if( (notNull==false)&& checkInputLength(fieldCalledName,field,maxLen) ) {
     return true; 
 }
 return false;

}
 
function checkTogetherNumber(fieldCalledName, field,min,max,notNull) {
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ش� �ʵ��� �ʼ��Է¿���üũ�� ������ ����üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    * min    : ���Ǵ� ������ �ּҰ�
    * max    : ���Ǵ� ������ �ִ밪
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkTogetherNumber('�׽�Ʈ�ʵ�',this,10,100,true);"
       onkeyup="javascript:checkInputNumber('�׽�Ʈ�ʵ�',this);" >
    ****************************************************************************************************
    */

    if ( ( notNull==true) && checkNotEmpty(fieldCalledName,field) && checkNumber(fieldCalledName,field,min,max)) {
     return true;
    }
    if ( notNull==false) {
     if(isEmpty(field.value) || (checkNumber(fieldCalledName,field,min,max)) ) return true;
    }
    
    return false;
}

function checkTogetherDate(fieldCalledName, field, notNull){
    /* 
    ****************************************************************************************************
    *  �Լ�����: ��¥�� �ʼ��Է¿���üũ�� ���ռ� üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field    : html���� name���� ������ �Է��ʵ� ��ü
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    *
    * ��뿹  <input type='text' name='test3' onBlur="javascript:checkTogetherText('�׽�Ʈ�ʵ�',this,true);"
       onkeyup="javascript:checkInputNumber('�׽�Ʈ�ʵ�',this);" >
    ****************************************************************************************************
    */   
    
    if ( ( notNull==true) && checkNotEmpty(fieldCalledName,field) && checkDate(fieldCalledName,field)) {
     return true;
    }
    if ( notNull==false) {
     if(isEmpty(field.value) || (checkDate(fieldCalledName,field)) ) return true;
    }
    
    return false;
}

function checkDatesFromTo(from_field_name, to_field_name) {
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ʵ� �̸��� �������� ���������� �Էµ� �����ϰ� ������ �� ��¥�� ¦���� ���������� �˻��Ѵ�.
    *
    * from_field_name  : �������� �Է¶��� �ʵ���� ��Ÿ���� ���ڿ�
    * to_field_name  : �������� �Է¶��� �ʵ���� ��Ÿ���� ���ڿ�
    ****************************************************************************************************
    */ 
    
 var from_fields = document.getElementsByName(from_field_name);
 var to_fields = document.getElementsByName(to_field_name);

 for(var i=0; i<from_fields.length; i++) {
  if(!checkDateFromTo(from_fields[i], to_fields[i])) return false
 }
 return true;
}

function checkRCNs(field_name) {
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ش��ʵ尡 �ֹε�Ϲ�ȣ�� �������� �˻縦 �Ѵ�.
    *
    * field_name   : html���� name���� ������ �Է��ʵ���� ��Ÿ���� ���ڿ�
    *
    ****************************************************************************************************
    */ 
 var fields = document.getElementsByName(field_name); 
 for(var i=0; i<fields.length; i++) {
  //if(!checkRCNs(fields[i])) return false
  if(!checkRCN(fields[i])) return false
 }
 return true;
}

function checkTogetherTexts(fieldCalledName, field_name, maxLen, notNull) {
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ش� �ʵ���� ���� �ؽ�Ʈ�ʵ����  �ʼ��Է¿���üũ�� ����üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field_name   : html���� name���� ������ �Է��ʵ���� ��Ÿ���� ���ڿ�
    * maxlen    : ���Ǵ� ������ �ִ����
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    ****************************************************************************************************
    */

 var fields = document.getElementsByName(field_name); 
 for(var i=0; i<fields.length; i++) {
  if(!checkTogetherText(fieldCalledName, fields[i], maxLen, notNull)) return false
 }
 return true;
}


function checkTogetherNumbers(fieldCalledName, field_name, min, max, notNull) {
    /* 
    ****************************************************************************************************
    *  �Լ�����: �ش� �ʵ���� ���� �ʵ���� �ʼ��Է¿���üũ�� ����üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field_name   : html���� name���� ������ �Է��ʵ���� ��Ÿ���� ���ڿ�
    * min    : ���Ǵ� ������ �ּҰ�
    * max    : ���Ǵ� ������ �ִ밪
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    *
    ****************************************************************************************************
    */
 var fields = document.getElementsByName(field_name); 
 for(var i=0; i<fields.length; i++) {
  if(!checkTogetherNumber(fieldCalledName, fields[i], min, max, notNull)) return false
 }
 return true;
}

function checkTogetherDates(fieldCalledName, field_name, notNull) {
    /* 
    ****************************************************************************************************
    *  �Լ�����:  �ش� �ʵ���� ���� �ʵ���� �ʼ��Է¿���üũ�� ��¥ ���ռ� üũ�� ���� �Ѵ�.
    *
    * fieldCalledName : üũ�� �� �Է��ʵ��� �ѱ۸�Ī. ���� �޽��� ��� �ÿ� ����Ѵ�.
    * field_name   : html���� name���� ������ �Է��ʵ���� ��Ÿ���� ���ڿ�
    * notNull   : �ʼ��Է� �ʵ������� ����(true,false)
    ****************************************************************************************************
    */   
 var fields = document.getElementsByName(field_name); 
 for(var i=0; i<fields.length; i++) {
  if(!checkTogetherDate(fieldCalledName, fields[i], notNull)) return false
 }
 return true;
}

function checkDateWithin(checkField,fromDate,toDate){
    /* 
    ****************************************************************************************************
    *  �Լ�����: ������ �� ��¥ ���̿� ��� ��¥�� ���ϴ��� �˻��Ѵ�.
    * checkField    : �˻縦 �� �ʵ�
    * fromDate    : �������ڸ� ��Ÿ�� ���ڿ�
    * ToDate    : �������ڸ� ��Ÿ�� ���ڿ�
    ****************************************************************************************************
    */ 
 
 if  ( (fromDate>checkField.value) || (checkField.value>toDate )) {
     alert("��¥�� ������ ������ ������ϴ�."); 
     checkField.focus();
     checkField.select(); 
     return false;
 }
 else return true;

}


function checkDatesInOut(innerFromField_name,innerToField_name, outerFromField,outerToField){
    /* 
    ****************************************************************************************************
    *  �Լ�����: �����ϰ� �������� ¦���� ū ������ �����ϰ� �������� ������ ���ϴ����� �˻��Ѵ�.
    * innerFromField_name : ���� ������ ������ �ʵ��̸��� ��Ÿ���� ���ڿ�. ���� ��� ������ ��������� �Է� �ʵ��� �̸�.
    * innerToField_name : ���� ������ ������ �ʵ��̸��� ��Ÿ���� ���ڿ�. ���� ��� ������ ���������� �Է� �ʵ��� �̸�.
    * outerFromField  : ū ������ ������ �ʵ尴ü. ���� ��� ��ü ����Ⱓ�� ������ �ʵ� ��ü
    * outerToField  : ū ������ ������ �ʵ尴ü. ���� ��� ��ü ����Ⱓ�� ������ �ʵ� ��ü
    *
    * ��뿹    (��ũ��Ʈ ������)
    * if(!checkDatesInOut("aud_sdate", "aud_edate", document.all.tot_aud_sdate,document.all.tot_aud_edate)) return false;
    ****************************************************************************************************
    */ 
 
 if(!checkDateFromTo(outerFromField, outerToField)) return false;
 
 var innerFromFields = document.getElementsByName(innerFromField_name); 
 var innerToFields = document.getElementsByName(innerToField_name);  

 for(var i=0; i<innerToFields.length; i++) {
 if(!checkDateFromTo(innerFromFields[i], innerToFields[i])) return false;
 if(!checkDateWithin(innerFromFields[i],outerFromField.value, outerToField.value)) return false;
 if(!checkDateWithin(innerToFields[i],outerFromField.value, outerToField.value)) return false;
 } 
 return true;
}

function getQuartetFromDate(date){
    /*
    *********************************************************************************************************
    *   �Լ����� : ��¥�� �ش��ϴ� �б⸦ ��ȯ�Ѵ�.
    * date   : YYYYMMDD
    ***********************************************************************************************************
    */
 if(date.substring(5,7) == "01") {
  date = date.substring(0,4) + "�� " + " 1/4�б�";
 } else if(date.substring(5,7) == "04") {
  date = date.substring(0,4) + "�� " + " 2/4�б�";
 } else if(date.substring(5,7) == "07") {
  date = date.substring(0,4) + "�� " + " 3/4�б�";
 } else if(date.substring(5,7) == "10") {
  date = date.substring(0,4) + "�� " + " 4/4�б�";
 } else {
  date = date.substring(0,4) + "�� ";
 }
 return date;
}

/**
 * Tab_onclick �̺�Ʈ
 * �� ���ý� ó��
 */
function btnTab1_onclick() {
 frmThis.btnTab1.style.backgroundImage = meURL_TABON;
 frmThis.btnTab2.style.backgroundImage = meURL_TAB;
 frmThis.btnTab1.className="BTNTABON";
 frmThis.btnTab2.className="BTNTAB";
 
 pnlTab1.style.visibility = "visible";
 pnlTab2.style.visibility = "hidden";
 pnlTab3.style.visibility = "hidden";
 
 //�����ư��Ʈ��
 gSetAuthority(frmThis.imgDetail, true);
 gSetAuthority(frmThis.imgHovrWrt, false);
}


/**
 * Tab_onclick �̺�Ʈ
 * �� ���ý� ó��
 */
function btnTab2_onclick() {
 frmThis.btnTab1.style.backgroundImage = meURL_TAB;
 frmThis.btnTab2.style.backgroundImage = meURL_TABON;
 frmThis.btnTab1.className="BTNTAB";
 frmThis.btnTab2.className="BTNTABON";
 
 pnlTab1.style.visibility = "hidden";
 if ( type == "N" ) {
  pnlTab2.style.visibility = "visible";
 } else {
  pnlTab3.style.visibility = "visible";
 }
 
 //�����ư��Ʈ��
 gSetAuthority(frmThis.imgDetail, false);
 gSetAuthority(frmThis.imgHovrWrt, true);
}

/* 
********************************************************************************************************* 
*   �Լ�����  : ���ڿ�����  ���ڰ��� ������ �����Ѵ�. 
* str    : ���ڿ� 
*********************************************************************************************************** 
*/ 
function PerfactTrim(val){ 
       var rtnVal = ""; 
       var len = val.length; 
 
       for(var i=0;i<len;i++){ 
         if(val.substring(i, i+1) != " "){ 
          rtnVal = rtnVal + val.substring(i, i+1);  
         } 
       } 
       
       return rtnVal; 
}  

/*
***************************************************************************************
* �Լ����� : �޽����� ����Ѵ�.
***************************************************************************************
*/
function gWriteText (objTagID, strText){
 
 if (objTagID == ""){
 
  window.status = strText;
 }
 else if (objTagID == "vbOKOnly" ){
   
  gOkMsgBox(strText, objTagID);
    } 
 else if (objTagID == "vbYesNo"){
   
  return gYesNoMsgBox(strText, objTagID);
 }
 else if (objTagID == "vbYesNoCancel"){
   
  return gYesNoCancelMsgBox(strText , objTagID);
 }  
   else if (objTagID == "vbProc"){   
    
    gShowWait(strText); 
 } 
 else{ 
  
  objTagID.innerText = strText;
 }
}
/*
***************************************************************************************
* �Լ����� : ó���� ȭ���� ����.
***************************************************************************************
*/
function gShowWait (flgWait){
 
 if (flgWait == true) {
  window.document.forms(0).style.cursor="wait" ;
  document.all.procBack.style.visibility="visible";    
  mobjSCGLCtl.DoEventQueue(); 
 }else {
  window.document.forms(0).style.cursor="default";
  document.all.procBack.style.visibility="hidden" ;
 } 
}

/* ==================================jyk �߰� start ==============================================*/

/*
***************************************************************************************
* �Լ����� : Grid���� üũ�� �׸��� ������ üũ�Ѵ�.
***************************************************************************************
*/
function gCheckSaveData (objsprSht, strChkBox){
 
 if (mobjSCGLSpr.GetClip2(objsprSht, strChkBox, 1, -1, 0, "\t").indexOf("1") < 0) {
  gErrorMsgBox("������ �ڷ�" +meMAKE_CHOICE, "");
  
  return true ;
 }
}

/*
***************************************************************************************
* �Լ����� : �ǵ���Ÿ�� ����� ��� üũ�ڽ� üũ, flag ó�� 
***************************************************************************************
*/
function gSetByChangeData (objsprSht, lngCol, lngRow, strChkBox){

 if (mobjSCGLSpr.GetDataField(objsprSht, lngCol, false) != strChkBox){
  var opOldFlg = mobjSCGLSpr.GetFlag(objsprSht, lngRow, true);
 
  mobjSCGLSpr.CellChanged(objsprSht, lngCol, lngRow);
  
  if (mobjSCGLSpr.GetTextBinding(objsprSht, strChkBox, lngRow)=="0"){
   mobjSCGLSpr.SetTextBinding(objsprSht, strChkBox, lngRow, "1");
  }
 }

}

/*
***************************************************************************************
* �Լ����� : üũ�� ����Ÿ �����ؼ� XML�� �ۼ�
***************************************************************************************
*/
function gMakeXMLwithChkData (objSprSht, strChkBox){

 var strXMLData = "",  strTmpXML = "";  // ������ ����(XML), XMLData�� Edit�ϱ� ���� ����
 var intSelCnt = 0;
 var arrReturn = new Array();
 
 for( var i=0; i <=  mobjSCGLSpr.GetMaxRows(objSprSht) ; i++){
   
  if (mobjSCGLSpr.GetTextBinding(objSprSht, strChkBox, i )=="1"){
   intSelCnt++;
   
  //�����ϵ��� ������ ����Ÿ�� data flag �� ����
   switch (mobjSCGLSpr.GetFlag(objSprSht, i, true)){
    case meCLS_FLAG :
     mobjSCGLSpr.SetFlag(objSprSht, meDEL_FLAG ,  i);
     break;
    case meINS_FLAG :
     mobjSCGLSpr.SetFlag(objSprSht, meID_FLAG ,  i);
     break;
    case meUPD_FLAG :
     mobjSCGLSpr.SetFlag(objSprSht, meUD_FLAG ,  i);
     break;
    case meIU_FLAG :
     mobjSCGLSpr.SetFlag(objSprSht, meIUD_FLAG ,  i);
     break;
   } 
   
   // XMLdata �����--->�����Լ�ȭ(?) �ƴϸ� �ó����Լ� Ȱ���ؼ�....
   strTmpXML = mobjSCGLSpr.GetClipBinding(objSprSht, "-1", i, i, 2);
   strTmpXML = strTmpXML.substring(16, strTmpXML.indexOf("</DataSet>"));
   strTmpXML = "<Table><DataFlag>" + mobjSCGLSpr.GetFlag(objSprSht, i, true) + "</DataFlag>" + strTmpXML;
   strXMLData = strXMLData + strTmpXML ;
  }
 }
 strXMLData = "<DataSet>" + strXMLData + "</DataSet>" ;
 arrReturn[0] = strXMLData;
 arrReturn[1] = intSelCnt;
 return arrReturn ;
}

/*
***************************************************************************************
* �Լ����� : ������ ����Ÿ row  sheet���� ����
***************************************************************************************
*/
function gDeleteChkData (objSprSht, strChkBox){

 for( var i=0; i <=  mobjSCGLSpr.GetMaxRows(objSprSht) ; i++){
  if (mobjSCGLSpr.GetTextBinding(objSprSht, strChkBox, i )=="1"){
   //������ Grid�� Row�� ��Ʈ���� ����  
   mobjSCGLSpr.DeleteRow(objSprSht, i);
   i--;
  }
 }
}

/*
***************************************************************************************
* �Լ����� : üũ�ڽ� ��ü�� ����/�������� ó��
***************************************************************************************
*/
function gAllCheckChkBox (objSprSht, lngCol, strChkBox, chkFlg){
 
 if (chkFlg=="Y"){
  for( var i=1; i <=  mobjSCGLSpr.GetMaxRows(objSprSht) ; i++){
   mobjSCGLSpr.SetTextBinding(objSprSht, strChkBox, i, "0");
   chkFlg = "N";
  }
 } else { 
  for( var j=1; j <=  mobjSCGLSpr.GetMaxRows(objSprSht) ; j++){
   mobjSCGLSpr.SetTextBinding(objSprSht, strChkBox, j, "1");
   chkFlg = "Y";
  }
 }
 
 return chkFlg;
}

/*
***************************************************************************************
* �Լ����� : üũ�ڽ� Ŭ�� �� ���¿� ���� ���� flag ����
***************************************************************************************
*/
function gSetFlagByChkBox (objSprSht, lngCol, lngRow, opOldFlg){

 if (mobjSCGLSpr.GetText(objSprSht, lngCol, lngRow)=="1" ){
  if (mobjSCGLSpr.GetFlag(objSprSht, lngRow, true)!=0) 
   opOldFlg = mobjSCGLSpr.GetFlag(objSprSht, lngRow, true);
  else if ( opOldFlg==null )
   opOldFlg = 2;

   
  mobjSCGLSpr.SetFlag(objSprSht, opOldFlg,  lngRow);
 }
 else{
  opOldFlg = mobjSCGLSpr.GetFlag(objSprSht, lngRow, true);
  mobjSCGLSpr.SetFlag(objSprSht, 0,  lngRow);
 }
 
 return opOldFlg;
}
/* ==================================jyk �߰� end ==============================================*/

/*****************************************************************************************/
function rmEmptyRowSht(objSprSht) 
{ 
 var str = ""; 
 for(var i = 1; i <= mobjSCGLSpr.GetMaxRows(objSprSht); i++){ 
  if(mobjSCGLSpr.GetTextBinding(objSprSht,"ATTCH_FILE_NM", i) == "") 
   mobjSCGLSpr.DeleteRow(objSprSht, i--); 
 } 
   gWriteText(lblStatus, str); 
 return objSprSht; 
} 
/****************************************************************************************/
function gFileUp(mobjSCGLFileUp)
{
 var rtnFile;
 rtnFile = mobjSCGLFileUp.OpenFileUp(1, "", FTP_SERVER, 21, FTP_USR, FTP_PWD, FILEDOWN_DIR, false, true);
 return rtnFile;
}

/*
***************************************************************************************
* ������ ��Ű�� �����ϰ� Ȯ���ϱ�
*�������� �ּҶ��� 
*javascript:alert(document.cookie)
***************************************************************************************
*/


/*
***************************************************************************************
*
*���� �뷮 üũ�ϱ�
*<form>
*<input type=file name="filename" onChange="getFileSize(this.value,this.name)">
*</form>

*<img name=tmp width=0 height=0>
***************************************************************************************
*/
function getFileSize(url,name)
{
 tmp.dynsrc = url;
 if (tmp.fileSize > 8388608)
 {
  alert ("8M �̻��� �ȵǿ�");
  document.getElementById(name).value = "";
 }
}

/*
***************************************************************************************
* �湮�� �ػ� ���ϱ�
***************************************************************************************
*/ 

document.write(screen.width+" * "+screen.height)





/*
***************************************************************************************
*��� ��ũ ���� �ѹ濡 ���ֱ�

*�Ʒ� �Լ��� <head>�� ������ ���Ͽ� �ִ� ��� ��ũ�� �̹����� ������ �������ϴ�.
***************************************************************************************
*/
function bluring()
{
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG")document.body.focus();
}
document.onfocusin=bluring

 
/*
***************************************************************************************
*��ư���� ��â(_blank) ����

*window.open �׼ǿ��� �ɼ��� ������ ��â�� �߰Եȴ�
*<input type=button value="��â" onclick="window.open('test.htm');">
***************************************************************************************
*/


/*
***************************************************************************************
*�ѹ� Ŭ���ϸ� ��Ȱ��ȭ �Ǵ� ���۹�ư

*<input type="submit" value="����" onClick="this.disabled=true">
***************************************************************************************
*/

/*
***************************************************************************************
*�̸��� ���� üũ
* if(str.pet_email.value.length > 0){
*   var regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/i;
*    if(!regExp.test(str.pet_email.value)){
*     alert("�߸��� e-mail �����Դϴ�.");
*     str.pet_email.value = "";
*     str.pet_email.focus();
*     return false;
*    }
* }
***************************************************************************************
*/

/*
***************************************************************************************
*������������ ���뿡 ���� ũ��(��,����) �ٲ��ִ� ��ũ��Ʈ

*�Ʒ� ��ũ��Ʈ�� iframe�� �� ������ �ǵ帮�� �ʾƵ� �˴ϴ�. 
*��ü�� ���� read/write������ ���ؼ� ���� �������� �����̱⸸ �ϸ� �˴ϴ�. 
*iframe�� �� ������ �ε��� �Ϸ�Ǵ� ���� doResize() �Լ��� ȣ���Ͽ� iframe�� �����ϴ� TD�±��� width�� height�� ������ �ٲ��ݴϴ�. 
*Windows 2000, IE 6.0 ������ �� ���̴µ� �ٸ� ȯ�濡���� ����� �𸣰ڳ׿� :)

* ��뿹.
*<table border="0" cellpadding="0" cellspacing="0"> 
*<tr> 
*<td id="container"><iframe src="your_file.html" name="myframe" width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="no" onload="doResize()"></iframe></td> 
*</tr> 
*</table> 
***************************************************************************************
*/
function doResize() 
{ 
container.height = myframe.document.body.scrollHeight; 
container.width = myframe.document.body.scrollWidth; 
}  



/*
***************************************************************************************
*�Ϸ絿�� �˾� â ����� �ʱ�

*��뿹
*=================== �˾�â �ҽ� ===================

*<SCRIPT language="JavaScript">
*	function setCookie( name, value, expiredays )
*    	{
*		var todayDate = new Date();
*		todayDate.setDate( todayDate.getDate() + expiredays );
*		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
*	}
*	function closeWin()
*	{
*		if ( document.forms[0].Notice.checked )
*   			setCookie( "Notice1", "done" , 1);
*			self.close();
*	}
*</SCRIPT>

*	<input type="checkbox" name="Notice" ><a href= "javascript:history.onclick=closeWin()">�Ϸ絿�� â����� �ʱ�</a>
***************************************************************************************
*/

function getCookie( name )
{
var nameOfCookie = name + "=";
var x = 0;
while ( x <= document.cookie.length )
{
var y = (x+nameOfCookie.length);
if ( document.cookie.substring( x, y ) == nameOfCookie ) {
if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
endOfCookie = document.cookie.length;
return unescape( document.cookie.substring( y, endOfCookie ) );
}
x = document.cookie.indexOf( " ", x ) + 1;
if ( x == 0 )
break;
}
return "";
}

if ( getCookie( "Notice1" ) != "done" )
{
noticeWindow  =  window.open('newwin/pop.htm','Notice1','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=363,height=733,left=30,top=120');
noticeWindow.opener = self;

}





 
/*
***************************************************************************************
*�����ð����� ���ΰ�ħ

* window.setTimeout('window.location.reload()',5000); //5�ʸ��� ���ø��� ��Ų��.
***************************************************************************************
*/
 

/*
***************************************************************************************
*��Ű

*Ư�� Ű�� ������ ������ ������ �̵��ϰ� ���ִ� �ҽ��Դϴ�.
***************************************************************************************
*/
var key = new Array();
key['n'] = "http://phpschool.com/bbs2/inc_board.html?code=news2";
key['q'] = "http://phpschool.com/v2/html/q_a_board.html";
key['d'] = "http://phpschool.com/bbs2/inc_board.html?code=down2";

function getKey(keyStroke) {
   isNetscape=(document.layers);
   eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
   which = String.fromCharCode(eventChooser).toLowerCase();
   for (var i in key)
     if (which == i) window.location = key[i];
}
document.onkeypress = getKey;

 

/*---------------------------------------------

* String ���� �ڸ���.
---------------------------------------------*/
String.prototype.cut = function(len) {
 var str = this;
 var l = 0;
 for (var i=0; i<str.length; i++) {
  l += (str.charCodeAt(i) > 128) ? 2 : 1;
  if (l > len) return str.substring(0,i);
 }
 return str;
}

/*---------------------------------------------

* String ���� �����.
---------------------------------------------*/
String.prototype.trim = function(){
 // Use a regular expression to replace leading and trailing
 // spaces with the empty string
 return this.replace(/(^\s*)|(\s*$)/g, "");
}

/*---------------------------------------------
* String �� ����Ʈ �� ���ϱ�.
---------------------------------------------*/
String.prototype.bytes = function() {
 var str = this;
 var l = 0;
 for (var i=0; i<str.length; i++) l += (str.charCodeAt(i) > 128) ? 2 : 1;
 return l;
}

/*---------------------------------------------
* iframe�� height�� body�� ���븸ŭ �ڵ����� �÷���.
---------------------------------------------*/
function resizeRetry(){
 if(ifrContents.document.body.readyState == "complete"){
  clearInterval(ifrContentsTimer);
 }
 else{
  resizeFrame(ifrContents.name);
 }
}

var ifrContentsTimer;
var ifrContents;

function resizeFrame(name){

        var oBody = document.body;
        var oFrame = parent.document.all(name);
  ifrContents = oFrame;
        var min_height = 613; //iframe�� �ּҳ���(�ʹ� �۾����� �� ��������, �ȼ�����, ��������)
        var min_width = 540; //iframe�� �ּҳʺ�
        var i_height = oBody.scrollHeight + 10; 

        var i_width = oBody.scrollWidth + (oBody.offsetWidth-oBody.clientWidth);

        if(i_height < min_height) i_height = min_height;
        if(i_width < min_width) i_width = min_width;
        oFrame.style.height = i_height;
        ifrContentsTimer = setInterval("resizeRetry()",100);
}

/*---------------------------------------------
* Ŭ�����忡 �ش� ������ ������.
---------------------------------------------*/

function setClipBoardText(strValue){
 window.clipboardData.setData('Text', strValue);
 alert("" + strValue +" \n\n�� ������ ����Ǿ����ϴ�.\n\nCtrl + v Ű�� ����Ͽ�, �ٿ� �ֱ⸦ ����Ͻ� �� �ֽ��ϴ�.");
}


/*---------------------------------------------
select ���� ������ ���� ���� ���õǰ�
----------------------------------------------*/
function selOrign(frm,val){
 for(i=0; i < frm.length ; i++){
  if(frm.options[i].value == val){
   frm.options.selectedIndex = i ;
   return;
  }
 }
}

/*---------------------------------------------
checkbox ���� ������ ���� ���� ���õǰ�
----------------------------------------------*/
function chkboxOrign(frm,val){
 if(frm.length == null){
  if(frm.value == val)
   frm.checked = true;
 }else{
  for(i=0;i<frm.length;i++){
   if(frm[i].value == val){
    frm[i].checked = true;
   }
  }
  return;
 }
}

function chkboxOrign_multi(frm,objchk,val){
 var i = 0;
 for(i=0;i<frm.elements.length;i++){
  if(frm.elements[i].name == objchk){
   if(frm.elements[i].value == val){
    frm.elements[i].checked = true;
   }
  }
 }
}

/*---------------------------------------------
radio ���� ������ ���� ���� ���õǰ�
----------------------------------------------*/
function radioOrign(frm,val){
 for(i=0; i < frm.length ; i++){
  if(frm[i].value == val){
   frm[i].checked = true ;
   return ;
  }
 }
}

/*---------------------------------------------
���ڸ� �Է¹ޱ�
��) onKeyDown="return onlyNum();"
----------------------------------------------*/
function onlyNum(){
 if(
  (event.keyCode >= 48 && event.keyCode <=57) ||
  (event.keyCode >= 96 && event.keyCode <=105) ||
  (event.keyCode >= 37 && event.keyCode <=40) ||
  event.keyCode == 9 ||
  event.keyCode == 8 ||
  event.keyCode == 46
  ){
  //48-57(0-9)
  //96-105(Ű�е�0-9)
  //8 : backspace
  //46 : delete key
  //9 :tab
  //37-40 : left, up, right, down
  event.returnValue=true;
 }
 else{
  //alert('���ڸ� �Է� �����մϴ�.');
  event.returnValue=false;
 }
}

/*---------------------------------------------
������ ���̹�ŭ�� �Է¹ޱ�
��) onKeyUp="return  checkAllowLength(������ں������°�ü,���ڼ���ü ,80);" onKeyDown="return checkAllowLength(������ں������°�ü,���ڼ���ü ,80);"
----------------------------------------------*/

function checkAllowLength(objView, objTar, max_cnt){
 if(event.keyCode > 31 || event.keyCode == "") {
  if(objTar.value.bytes() > max_cnt){
   alert("�ִ� " + max_cnt + "byte�� �ѱ� �� �����ϴ�.");
   objTar.value = objTar.value.cut(max_cnt);
  }
 }
 objView.value = objTar.value.bytes();
}

  
/*--------------------------------------------
�̹��� ��������
---------------------------------------------*/
function resizeImg(imgObj, max_width, max_height){

 var dst_width;
 var dst_height;
 var img_width;
 var img_height;

 img_width = parseInt(imgObj.width);
 img_height = parseInt(imgObj.height);

 if(img_width == 0 || img_height == 0){
  imgObj.style.display = '';
  return false;
 }

    // ���κ��� �켱���� ����
    if(img_width > max_width || img_height > max_height) {
        // ���α������� ��������
        dst_width = max_width;
        dst_height = Math.ceil((max_width / img_width) * img_height);

        // ���ΰ� max_height �� ����� ��
        if(dst_height > max_height) {
   dst_height = max_height;
   dst_width = Math.ceil((max_height / img_height) * img_width);
        }

        imgObj.width = dst_width;
        imgObj.height = dst_height;
    }
    // ���κ��� �켱���� ��

 imgObj.style.display = '';

 return true;
}
/*---------------------------------------------
xml data �о����
----------------------------------------------*/
function getXmlHttpRequest(_url, _param){
    var objXmlConn;
    try{objXmlConn = new ActiveXObject("Msxml2.XMLHTTP.3.0");}
    catch(e){try{objXmlConn = new ActiveXObject("Microsoft.XMLHTTP");}catch(oc){objXmlConn = null;}}

    if(!objXmlConn && typeof XMLHttpRequest != "undefined") objXmlConn = new XMLHttpRequest();

    objXmlConn.open("GET", _url + "?" + _param, false);
    objXmlConn.send(null);
 
 //code|message ���·� ����
    return objXmlConn.responseText.trim().split("|");
}


/*---------------------------------------------------
cookie ����
-------------------------------------------------------*/

function getCookieVal (offset) {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1) endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) { //while open
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
         return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
   } //while close
   return null;
}

function SetCookie (name, value) {
   var argv = SetCookie.arguments;
   var argc = SetCookie.arguments.length;
   var expires = (2 < argc) ? argv[2] : null;
   var path = (3 < argc) ? argv[3] : null;
   var domain = (4 < argc) ? argv[4] : null;
   var secure = (5 < argc) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
      ((expires == null) ? "" :
         ("; expires=" + expires.toGMTString())) +
      ((path == null) ? "" : ("; path=" + path)) +
      ((domain == null) ? "" : ("; domain=" + domain)) +
      ((secure == true) ? "; secure" : "");
}

/* ---------------------------------------------
 * �Լ��� : checkSpecialChar
 * ��  �� : Ư������ üũ
 * ��) if(!checkSpecialChar()) return;
 ---------------------------------------------*/
function checkSpecialChar(_obj){
    if(_obj.value.search(/[\",\',<,>]/g) >= 0) {
        alert("���ڿ��� Ư������( \",  ',  <,  > )�� �ֽ��ϴ�.\nƯ�����ڸ� �����Ͽ� �ֽʽÿ�!");
        _obj.select();
        _obj.focus();
    }
}

