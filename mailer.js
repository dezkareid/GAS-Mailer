/**
@author: Joel Humberto Gómez Paredes
@versiom: 1.0
@description: Script para mandar correo que se encuentran en una spreadsheet
*/
function mailer() 
{
  //Declaramos una variable con la url de la imagen que embeberemos en el mensaje
  var gdgLogoUrl =
         "https://lh6.googleusercontent.com/-QhVkC8uNjkg/U1ytSQfiBpI/AAAAAAAAACc/0Y24zUDuKys/w480-h270-no/oie_279814pWMV1Xqt.png";
  //Bajamos la imagen de internet
  var gdgLogoBlob = UrlFetchApp
                          .fetch(gdgLogoUrl)
                          .getBlob()
                          .setName("gdgLogo");
  //Abrimos una spreadsheet
  var Ssheet = SpreadsheetApp.openById("id-de-tu-hoja-de-calculo");
  //Obtenemos la hoja actual con la que se esta trabajando(por defecto es la primera)
  var sheet = Ssheet.getActiveSheet();
  //Le decimos de nos de sus valores
  var values = sheet.getDataRange().getValues();

  //Recorremos, los datos...estan en un arreglo de arreglos, yo aqui le puse que inicie desde 1 porque el valor 0 corresponde a la fila con el nombre de la columna
  for (var i = 1; i < values.length; i++) {
    //Usamos MailApp, para mandar el correo
    MailApp.sendEmail({
      to: values[i][2], //La variable i representa la fila, y el 2 representa a la columna, con el correo
      subject: "Asunto",
      htmlBody: "<b>Y asi programamos un script para mandar mails que estan en una spreadsheet</b><br/><br/>"+
      "<a href='https://plus.google.com/u/0/b/117540886576474322118/117540886576474322118/about/p/pub'><img src='cid:gdgLogo'></a>",         
     inlineImages:
       {
         gdgLogo: gdgLogoBlob,
         
       }
   });
    
  }
}