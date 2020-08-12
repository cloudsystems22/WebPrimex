using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WebPrimex.Classes;

namespace WebPrimex.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult planoAtivation(string plano)
        {
            string linkNavegacao = "";
            switch (plano)
            {
                case "Plano Controle 3Gb":
                    linkNavegacao = "https://pag.ae/7W433-36a";
                    break;

                case "Plano Controle 5Gb":
                    linkNavegacao = "https://pag.ae/7W434Kcma";
                    break;

                case "Plano Controle 10Gb":
                    linkNavegacao = "https://pag.ae/7W435mnKo";
                    break;

                case "Plano Controle 15Gb":
                    linkNavegacao = "https://pag.ae/7W435-Uuq";
                    break;

                case "Plano Controle 20Gb":
                    linkNavegacao = "https://pag.ae/7W436EFzu";
                    break;

                case "Plano Controle 50Gb":
                    linkNavegacao = "https://pag.ae/7W4375uxQ";
                    break;
            }
            return Json(new { linkNavegacao }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Assinatura(int plano)
        {

            string element = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            int count = 8;
            Random random = new Random();
            string str = new string(Enumerable.Repeat<string>(element, count).Select<string, char>((Func<string, char>)(s => s[random.Next(s.Length)])).ToArray<char>());

            string tokenAss = "";
            string planoStr = "";
            decimal valorPlan = 0;
            string idPlano = "";
            string refereciaSolicit = str.ToString();
            switch (plano)
            {
                case 1:
                    ViewBag.Img = "banners-planos-um.png";
                    ViewBag.TituloPlano = "Plano Controle - 3Gb";
                    planoStr = "Plano Controle - 3Gb";
                    ViewBag.CodPlano = "ED286F04-6363-E7A8-8464-9FACDBECCAB9";
                    tokenAss = "ED286F04-6363-E7A8-8464-9FACDBECCAB9";
                    valorPlan = Convert.ToDecimal("39.90");
                    idPlano = "8112e29e94175905bafca5bf437d253e";
                    ViewBag.Link = "http://pag.ae/7V-Q9wD9r";
                    //ViewBag.Link = "https://pag.ae/7Wcmk2CB9";
                    break;

                case 2:
                    ViewBag.Img = "banners-planos-dois.png";
                    ViewBag.TituloPlano = "Plano Controle - 5Gb";
                    planoStr = "Plano Controle - 5Gb";
                    ViewBag.CodPlano = "5BEFCBEB-2424-4430-0432-9F9828128A99";
                    tokenAss = "5BEFCBEB-2424-4430-0432-9F9828128A99";
                    valorPlan = Convert.ToDecimal("49.90");
                    idPlano = "3977db37c524d10bfe85c89feb2c3fa6";
                    ViewBag.Link = "http://pag.ae/7VZvv-A9u";
                    break;

                case 3:
                    ViewBag.Img = "banners-planos-tres.png";
                    ViewBag.TituloPlano = "Plano Controle - 10Gb";
                    planoStr = "Plano Controle - 10Gb";
                    ViewBag.Botao = "<form action='https://pagseguro.uol.com.br/pre-approvals/request.html' method='post'>" +
                                    "<input type='hidden' name = 'code' value = '24A399FC11115222240B3FB33815223B' />" +
                                    "<input type='hidden' name = 'iot' value = 'button' />" +
                                    "<input type='image' src='https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/120x53-assinar.gif' name='submit' alt='Pague com PagSeguro - É rápido, grátis e seguro!' width='120' height='53' /></form> ";
                    ViewBag.CodPlano = "24A399FC-1111-5222-240B-3FB33815223B";
                    tokenAss = "24A399FC-1111-5222-240B-3FB33815223B";
                    valorPlan = Convert.ToDecimal("59.90");
                    idPlano = "eb909df23502218d04537c87e84ccc2b";
                    ViewBag.Link = "http://pag.ae/7VZvBgoCR";
                    break;

                case 4:
                    ViewBag.Img = "banners-planos-quatro.png";
                    ViewBag.TituloPlano = "Plano Controle - 15Gb";
                    planoStr = "Plano Controle - 15Gb";
                    ViewBag.CodPlano = "B1C63082-5252-EE01-1448-9F9EA998F655";
                    tokenAss = "B1C63082-5252-EE01-1448-9F9EA998F655";
                    valorPlan = Convert.ToDecimal("79.90");
                    idPlano = "05d95904a4ad1b27c911cab692b2f544";
                    ViewBag.Link = "http://pag.ae/7VZvBLHYR";
                    break;

                case 5:
                    ViewBag.Img = "banners-planos-tres.png";
                    ViewBag.TituloPlano = "Plano Controle - 20Gb";
                    planoStr = "Plano Controle - 20Gb";
                    ViewBag.CodPlano = "A64D4245-4848-4397-745C-8FBA5DB91A89";
                    tokenAss = "A64D4245-4848-4397-745C-8FBA5DB91A89";
                    valorPlan = Convert.ToDecimal("89.90");
                    idPlano = "15b808f045b411fac57159017b31fe35";
                    ViewBag.Link = "http://pag.ae/7VZvC8vxQ";
                    break;

                case 6:
                    ViewBag.Img = "banners-planos-cinco.png";
                    ViewBag.TituloPlano = "Plano Controle - 50Gb";
                    planoStr = "Plano Controle - 50Gb";
                    ViewBag.CodPlano = "A64D4245-4848-4397-745C-8FBA5DB91A89";
                    tokenAss = "A64D4245-4848-4397-745C-8FBA5DB91A89";
                    valorPlan = Convert.ToDecimal("119.90");
                    idPlano = "15b808f045b411fac57159017b31fe35";
                    ViewBag.Link = "http://pag.ae/7VZvCuier";
                    break;


            }
            ViewBag.Plano = plano;

            //AdesaoPlanos(idPlano,valorPlan, idPlano, planoStr, refereciaSolicit);
            return View();
        }

        [HttpPost]
        public ActionResult Assinatura(int plano, string assunto, string nomeAss, string emailAss, string cepAss, string bairroAss, string logradouroAss, string cidadeAss, string estadoAss, string numTelAss, string complementoAss, string numDDDAss, string cpfAss, string rgAss, string cellDDD, string numCell, string radGroupBtn2_1, string radGroupBtn2_2, HttpPostedFileBase pdfFile, string newsletter, string iccidAss)
        {

            ViewBag.Plano = plano;
            string linhaTipoDoc = "";
            string linhaTipoCli = "";
            string receberNoticias = "";

            string Path = "~/Attachments";

            if (pdfFile.FileName.EndsWith("pdf") || pdfFile.FileName.EndsWith("jpg"))
            {
                //string arquivoEx = Server.MapPath(@"\Attachments\" + pdfFile.FileName);
                try
                {
                    FilesUpload.UploadPhoto(pdfFile, Path);
                }
                catch
                {
                    ViewBag.Erro1 = "O arquivo já está sendo utilizado em outro processo! Por favor renomeio o arquivo ou atualize o site clicando em " + "<i class=''></i>" + " e tente novamente!";
                }


                string arquivoPdf = string.Format("{0}/{1}", Path, pdfFile);
            }

            if (radGroupBtn2_1 == "on")
            {
                linhaTipoDoc = "<tr><td style='width:120px;'>CPF:</td><td style='width:380px'>" + cpfAss + "</td></tr>";
            }
            else if (radGroupBtn2_2 == "on")
            {
                linhaTipoDoc = "<tr><td style='width:120px;'>CNPJ:</td><td style='width:380px'>" + cpfAss + "</td></tr>";
            }

            if (newsletter == "on")
            {
                receberNoticias = "<tr><td style='width:120px;'></td><td style='width:380px'>Aceito receber notícias e promoções.</td></tr>";
            }
            else
            {
                receberNoticias = "<tr><td style='width:120px;'></td><td style='width:380px'>Não solicitei receber notícias e promoções.</td></tr>";
            }

            MailMessage objEmail = new MailMessage();
            objEmail.From = new MailAddress(emailAss);
            //objEmail.ReplyTo = new MailAddress("davidfico22@gmail.com", "damico@mdk.net.br");
            objEmail.To.Add("operacional@easysim4u.com");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("leonardo@unioperadora.com.br");
            objEmail.To.Add("damico@mdk.net.br");
            //objEmail.Bcc.Add("crm.easysim4u@gmail.com");
            objEmail.Priority = MailPriority.Normal;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = assunto;
            string anexo = Server.MapPath(@"\Attachments\" + pdfFile.FileName);
            objEmail.Attachments.Add(new Attachment(anexo));
            objEmail.Body = "<h3 style='font-family:Arial'>" + nomeAss + "</h3>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr style='background-color:#0a2f59'>" +
                "<td style='width:120px;'><img src='https://www.easysim4ubrasil.com/assets/img/logo/LogoEasySim4u.png' alt='Logo Unioperadora' style='width:120px' /></td>" +
                "<td style='width:380px'><h3 style='font-family:Arial; color:white; text-align:center'>Assinatura - " + assunto + "</h3></td></tr></table>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                linhaTipoDoc +
                "<tr><td style='width:120px;'>RG:</td><td style='width:380px'>" + rgAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Email:</td><td style='width:380px'>" + emailAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Fone:</td><td style='width:380px'>" + "(" + numDDDAss + ")" + numTelAss + "</td></tr>" +
                "<tr><td style='width:120px;'>CEP:</td><td style='width:380px'>" + cepAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Bairro:</td><td style='width:380px'>" + bairroAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Logradouro:</td><td style='width:380px'>" + logradouroAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Numero:</td><td style='width:380px'>" + numTelAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Compl.:</td><td style='width:380px'>" + complementoAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Cidade:</td><td style='width:380px'>" + cidadeAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Estado:</td><td style='width:380px'>" + estadoAss + "</td></tr>" +
                "<tr><td style='width:120px;'>Cell:</td><td style='width:380px'>" + "(" + cellDDD + ")" + numCell + "</td></tr>" +
                "<tr><td style='width:120px;'>COD. ICCID:</td><td>" + iccidAss + "</td></tr>" +
                receberNoticias +
                "<tr><td style='width:120px;'></td><td style='width:380px'>Concordo com os termos de uso. " + nomeAss + "- CPF:" + cpfAss + "</td></tr>";
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = "mail.unioperadora.com.br";
            objSmtp.Port = 587;
            objSmtp.EnableSsl = true;
            objSmtp.Credentials = new NetworkCredential("enviar@unioperadora.com.br", "Campinas2020");
            objSmtp.Send(objEmail);

            string urlPag = "";
            switch (plano)
            {
                case 1:
                    urlPag = "http://pag.ae/7V-Q9wD9r";
                    break;

                case 2:
                    urlPag = "http://pag.ae/7VZvv-A9u";
                    break;

                case 3:
                    urlPag = "http://pag.ae/7VZvBgoCR";
                    break;

                case 4:
                    urlPag = "http://pag.ae/7VZvBLHYR";
                    break;

                case 5:
                    urlPag = "http://pag.ae/7VZvC8vxQ";
                    break;

                case 6:
                    urlPag = "http://pag.ae/7VZvCuier";
                    //Compra do Chip
                    //urlPag = "https://pag.ae/7Wcmk2CB9";
                    break;

            }
            return Redirect(urlPag);
        }


        public ActionResult SucessoAss()
        {
            return View();
        }


        public JsonResult EnviaEmail(string nome, string email, string cep, string bairro, string logradouro, string numero, string cidade, string estado, string telefone, string complemento, int plano)
        {
            string linhaPlano = "";
            switch (plano)
            {
                case 1:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 3Gb</td></tr>";
                    break;
                case 2:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 5Gb</td></tr>";
                    break;
                case 3:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 10Gb</td></tr>";
                    break;
                case 4:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 15Gb</td></tr>";
                    break;
                case 5:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 20Gb</td></tr>";
                    break;
                case 6:
                    linhaPlano = "<tr><td colspan='2'>Plano controle 50Gb</td></tr>";
                    break;

            }

            MailMessage objEmail = new MailMessage();
            //objEmail.From = new MailAddress("pediulogistica@uniglobaltelecom.com");
            objEmail.From = new MailAddress(email);
            //objEmail.ReplyTo = new MailAddress("davidfico22@gmail.com", "damico@mdk.net.br");
            objEmail.To.Add("contato_easy@unioperadora.com");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.To.Add("operacional@easysim4u.com");
            //objEmail.Bcc.Add("crm.easysim4u@gmail.com");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("damico@mdk.net.br");
            objEmail.Priority = MailPriority.Normal;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = "Solicitação de envio do SIM Card.";
            objEmail.Body = "<h3 style='font-family:Arial'>" + nome + "</h3>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr style='background-color:#0a2f59'>" +
                "<td style='width:120px;'><img src='https://www.easysim4ubrasil.com/assets/img/logo/LogoEasySim4u.png' alt='Logo Unioperadora' style='width:120px' /></td>" +
                "<td style='width:380px'><h3 style='font-family:Arial; color:white; text-align:center'>Solicitação de envio do SIM Card.</h3></td></tr></table>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr><td>Email:</td><td>" + email + "</td></tr>" +
                "<tr><td>Fone:</td><td>" + telefone + "</td></tr>" +
                "<tr><td>CEP:</td><td>" + cep + "</td></tr>" +
                "<tr><td>Bairro:</td><td>" + bairro + "</td></tr>" +
                "<tr><td>Logradouro:</td><td>" + logradouro + "</td></tr>" +
                "<tr><td>Numero:</td><td>" + numero + "</td></tr>" +
                "<tr><td>Compl.:</td><td>" + complemento + "</td></tr>" +
                "<tr><td>Cidade:</td><td>" + cidade + "</td></tr>" +
                "<tr><td>Estado:</td><td>" + estado + "</td></tr>" +
                "<tr><td colspan='2'>Mensagem:</td></tr>" +
                "<tr><td colspan='2'>Gostaria de fazer a soliciatação de um SIM Card.</td></tr>" + linhaPlano;
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = "mail.unioperadora.com.br";
            objSmtp.Port = 587;
            objSmtp.EnableSsl = true;
            objSmtp.Credentials = new NetworkCredential("enviar@unioperadora.com.br", "Campinas2020");
            objSmtp.Send(objEmail);


            return Json(true);
        }

        [HttpPost]
        public JsonResult EnviaEmail2(string assunto, string nome, string email, string telefone, string mensagem)
        {

            MailMessage objEmail = new MailMessage();
            //objEmail.From = new MailAddress("pediulogistica@uniglobaltelecom.com");
            objEmail.From = new MailAddress(email);
            //objEmail.ReplyTo = new MailAddress("davidfico22@gmail.com", "damico@mdk.net.br");
            objEmail.To.Add("contato_easy@unioperadora.com");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("crm.easysim4u@gmail.com");
            objEmail.Bcc.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("damico@mdk.net.br");
            objEmail.Priority = MailPriority.Normal;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = assunto;
            objEmail.Body = "<h3 style='font-family:Arial'>" + nome + "</h3>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr style='background-color:#0a2f59'>" +
                "<td style='width:120px;'><img src='http://www.unioperadora.com.br/assets/img/logo/LogoEasySim4u.png' alt='Logo Unioperadora' style='width:120px' /></td>" +
                "<td style='width:380px'><h3 style='font-family:Arial; color:white; text-align:center'>" + assunto + "</h3></td></tr></table>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr><td>Email:</td><td>" + email + "</td></tr>" +
                "<tr><td>Fone:</td><td>" + telefone + "</td></tr>" +
                "<tr><td colspan='2'>Mensagem:</td></tr>" +
                "<tr><td colspan='2'>" + mensagem + "</td></tr>";
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = "mail.unioperadora.com.br";
            objSmtp.Port = 587;
            objSmtp.EnableSsl = true;
            objSmtp.Credentials = new NetworkCredential("enviar@unioperadora.com.br", "Campinas2020");
            objSmtp.Send(objEmail);


            return Json(true);
        }

        [HttpPost]
        public JsonResult EnviaEmail3(string assunto, string nome, string email, string cep, string bairro, string logradouro, string numero, string cidade, string estado, string telefone, string iccid, string complemento, string numDDD, string numerocell, string tipoNumero, string rg, string cpf)
        {


            MailMessage objEmail = new MailMessage();
            //objEmail.From = new MailAddress("pediulogistica@uniglobaltelecom.com");
            objEmail.From = new MailAddress(email);
            //objEmail.ReplyTo = new MailAddress("davidfico22@gmail.com", "damico@mdk.net.br");
            objEmail.To.Add("ativacao@unioperadora.com.br");
            objEmail.To.Add("operacional@easysim4u.com");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("damico@mdk.net.br");
            objEmail.Priority = MailPriority.Normal;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = assunto;
            objEmail.Body = "<h3 style='font-family:Arial'>" + nome + "</h3>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr style='background-color:#0a2f59'>" +
                "<td style='width:120px;'><img src='http://www.unioperadora.com.br/assets/img/logo/LogoEasySim4u.png' alt='Logo Unioperadora' style='width:120px' /></td>" +
                "<td style='width:380px'><h3 style='font-family:Arial; color:white; text-align:center'>Ativação - " + assunto + "</h3></td></tr></table>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr><td style='width:120px;'>RG:</td><td style='width:380px'>" + rg + "</td></tr>" +
                "<tr><td style='width:120px;'>CPF:</td><td style='width:380px'>" + cpf + "</td></tr>" +
                "<tr><td style='width:120px;'>Email:</td><td style='width:380px'>" + email + "</td></tr>" +
                "<tr><td style='width:120px;'>Fone:</td><td style='width:380px'>" + telefone + "</td></tr>" +
                "<tr><td style='width:120px;'>CEP:</td><td style='width:380px'>" + cep + "</td></tr>" +
                "<tr><td style='width:120px;'>Bairro:</td><td style='width:380px'>" + bairro + "</td></tr>" +
                "<tr><td style='width:120px;'>Logradouro:</td><td style='width:380px'>" + logradouro + "</td></tr>" +
                "<tr><td style='width:120px;'>Numero:</td><td style='width:380px'>" + numero + "</td></tr>" +
                "<tr><td style='width:120px;'>Compl.:</td><td style='width:380px'>" + complemento + "</td></tr>" +
                "<tr><td style='width:120px;'>Cidade:</td><td style='width:380px'>" + cidade + "</td></tr>" +
                "<tr><td style='width:120px;'>Estado:</td><td style='width:380px'>" + estado + "</td></tr>" +
                "<tr><td style='width:120px;'>ICCID:</td><td style='width:380px'>" + iccid + "</td></tr>" +
                "<tr><td style='width:120px;'>Cell:</td><td style='width:380px'>" + "(" + numDDD + ")" + numerocell + "</td></tr>" +
                "<tr><td style='width:120px;'>Tipo:</td><td style='width:380px'>" + tipoNumero + "</td></tr>";
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = "mail.unioperadora.com.br";
            objSmtp.Port = 587;
            objSmtp.EnableSsl = true;
            objSmtp.Credentials = new NetworkCredential("enviar@unioperadora.com.br", "Campinas2020");
            objSmtp.Send(objEmail);


            return Json(true);
        }


        [HttpPost]
        public JsonResult AnexarArquivo(HttpPostedFileBase pdfFile)
        {
            string Path = "~/Attachments";
            if (pdfFile.FileName.EndsWith("pdf"))
            {
                FilesUpload.UploadPhoto(pdfFile, Path);
                string arquivoPdf = string.Format("{0}/{1}", Path, pdfFile);
                return Json(new { pdfFile }, JsonRequestBehavior.AllowGet);
            }
            return Json(true);
        }

        [HttpPost]
        public ActionResult AttachmentFile(HttpPostedFileBase pdfFile)
        {
            string Path = "~/Attachments";
            if (pdfFile.FileName.EndsWith("pdf"))
            {
                FilesUpload.UploadPhoto(pdfFile, Path);
                string arquivoPdf = string.Format("{0}/{1}", Path, pdfFile);
                return View();
            }
            return View();
        }


        [HttpPost]
        public JsonResult EnviaEmailPlanRecorr(string assunto, string nome, string email, string cep, string bairro, string logradouro, string numero, string cidade, string estado, string telefone, string complemento, string numDDD, string cpf, string rg, string cellDDD, string cellNum, string tipoNum, string tipoCliente, HttpPostedFileBase pdfFile)
        {

            string linhaTipoDoc = "";
            string linhaTipoCli = "";

            string Path = "~/Attachments";
            if (pdfFile.FileName.EndsWith("pdf") || pdfFile.FileName.EndsWith("jpg"))
            {

                if (System.IO.File.Exists(Path + "/" + pdfFile.FileName))
                {
                    System.IO.File.Delete(Path + "/" + pdfFile.FileName);
                }

                FilesUpload.UploadPhoto(pdfFile, Path);
                string arquivoPdf = string.Format("{0}/{1}", Path, pdfFile);
            }

            if (tipoCliente == "PessoaFísica")
            {
                linhaTipoDoc = "<tr><td style='width:120px;'>CPF:</td><td style='width:380px'>" + cpf + "</td></tr>";
            }
            else if (tipoCliente == "PessoaJurídica")
            {
                linhaTipoDoc = "<tr><td style='width:120px;'>CNPJ:</td><td style='width:380px'>" + cpf + "</td></tr>";
            }

            MailMessage objEmail = new MailMessage();
            //objEmail.From = new MailAddress("pediulogistica@uniglobaltelecom.com");
            objEmail.From = new MailAddress(email);
            //objEmail.ReplyTo = new MailAddress("davidfico22@gmail.com", "damico@mdk.net.br");
            objEmail.To.Add("ativacao@unioperadora.com.br");
            //objEmail.To.Add("davidfico22@gmail.com");
            objEmail.Bcc.Add("damico@mdk.net.br");
            objEmail.Priority = MailPriority.Normal;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = assunto;
            string anexo = Server.MapPath(@"\Attachments\" + pdfFile);
            objEmail.Attachments.Add(new Attachment(anexo));
            objEmail.Body = "<h3 style='font-family:Arial'>" + nome + "</h3>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                "<tr style='background-color:#0a2f59'>" +
                "<td style='width:120px;'><img src='http://www.unioperadora.com.br/assets/img/logo/LogoEasySim4u.png' alt='Logo Unioperadora' style='width:120px' /></td>" +
                "<td style='width:380px'><h3 style='font-family:Arial; color:white; text-align:center'>Assinatura - " + assunto + "</h3></td></tr></table>" +
                "<table style='width:500px; height:70px; font-family:Arial; border:0px'>" +
                linhaTipoDoc +
                "<tr><td style='width:120px;'>RG:</td><td style='width:380px'>" + rg + "</td></tr>" +
                "<tr><td style='width:120px;'>Email:</td><td style='width:380px'>" + email + "</td></tr>" +
                "<tr><td style='width:120px;'>Fone:</td><td style='width:380px'>" + "(" + numDDD + ")" + telefone + "</td></tr>" +
                "<tr><td style='width:120px;'>CEP:</td><td style='width:380px'>" + cep + "</td></tr>" +
                "<tr><td style='width:120px;'>Bairro:</td><td style='width:380px'>" + bairro + "</td></tr>" +
                "<tr><td style='width:120px;'>Logradouro:</td><td style='width:380px'>" + logradouro + "</td></tr>" +
                "<tr><td style='width:120px;'>Numero:</td><td style='width:380px'>" + numero + "</td></tr>" +
                "<tr><td style='width:120px;'>Compl.:</td><td style='width:380px'>" + complemento + "</td></tr>" +
                "<tr><td style='width:120px;'>Cidade:</td><td style='width:380px'>" + cidade + "</td></tr>" +
                "<tr><td style='width:120px;'>Estado:</td><td style='width:380px'>" + estado + "</td></tr>" +

                "<tr><td style='width:120px;'>Cell:</td><td style='width:380px'>" + "(" + cellDDD + ")" + cellNum + "</td></tr>";
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = "mail.unioperadora.com.br";
            objSmtp.Port = 587;
            objSmtp.EnableSsl = true;
            objSmtp.Credentials = new NetworkCredential("enviar@unioperadora.com.br", "Campinas2020");
            objSmtp.Send(objEmail);


            return Json(true);
        }


        public ActionResult TermosUso()
        {
            return View();
        }
    }
}