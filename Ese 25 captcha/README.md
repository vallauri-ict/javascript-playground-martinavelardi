### Esercizio 25 - Captcha
Scrivere una
applicazione che:
* All’avvio generi e visualizzi 5 caratteri casuali fra
quelli contenuti all’interno del file captcha.png
(backgroundPosition=-50*y + "px " + -50*x + "px")
* In corrispondenza dell’evento onChange su txtUser
verifichi che il nome scelto sia lungo almeno 8 chr.
In caso contrario ricolorare di rosso il bordo del
textbox
In corrispondenza dell’evento onChange su txtPwd
verifichi che la password scelta sia lunga almeno 8
chr, contenga almeno una lettera minuscola, almeno
una maiuscola e almeno un numero.
In caso nok ricolorare di rosso il bordo del textbox
* In corrispondenza del pulsante “Non sono un
Robot” verifichi che il captcha inserito corrisponda a
quello generato, visualizzando a fianco l’immagine
di conferma e disabilitando sia il textBox del captcha
sia i due pulsanti
* In corrispondenza del pulsante Invia visualizza
-re un messaggio di ok se username, password e
captcha sono validi, nok in caso contrario.
