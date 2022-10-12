<?php
/**
 * Gestiona el banner de cookies
 *
 * @package   Protección de datos - RGPD
 * @author    ABCdatos
 * @license   GPLv2
 * @link      https://taller.abcdatos.net/
 */

defined( 'ABSPATH' ) or die( 'No se permite el acceso.' );

//$pdrgpd_google_analytics_id = pdrgpd_conf_google_analytics_id();
// https://analytics.google.com/
// > Iniciar sesión en Google Analytics
// > Admin
// > Seleccionar la cuenta y propedad requerida
// > Data streams
// > Pulsar en el seleccionado
// > Copiar el Measurement ID

// > Mausurement ID: G-5R9LDCYL1M (Taller)

// Para autorizar la carga de cookies desde el banner de cookies:
//	Analytics
//		gtag('consent', 'update', {
//			'ad_storage': 'granted',
//			'analytics_storage': 'granted'
//		    });
//	Facebook pixel
//		fbq('consent', 'grant').


// Carga las partes relacionadas con el banner de cookies
// Basado en https://emiliocobos.net/script-ley-de-cookies/
// https://github.com/emilio/CookieTool/blob/master/src/cookietool.js


// ***Almacenar en binario las diferentes categorías
if ( pdrgpd_conf_mostrar_banner_cookies() ) {
	add_action( 'wp_enqueue_scripts', 'pdrgpd_encola_script' );
	add_action( 'wp_enqueue_styles', 'pdrgpd_encola_estilo' );
	add_action('wp_footer', 'pdrgpd_inserta_cookietool');


	function pdrgpd_encola_script() {
		// Inserta el javascript de cookietool
		// add_action('wp_body_open', 'pdrgpd_inserta_cookietool');
		//wp_enqueue_script( 'ava-test-js', plugins_url( '/public/js/cookietool.js.php', __FILE__ ));
		wp_enqueue_script( 'pdrgpd-cookietool-js', plugins_url( '/public/js/cookietool.js', __FILE__ ));
	}

	function pdrgpd_encola_estilo() {
		wp_enqueue_script( 'pdrgpd-cookietool-js', plugins_url( '/public/js/cookietool.js', __FILE__ ));
		wp_enqueue_style( 'pdrgpd-cookietool-css', plugins_url( '/public/css/cookietool.css', __FILE__ ));
	}

	function pdrgpd_inserta_cookietool() {
//		
//		<script src="/cgi/gestioncookies.pl"></script>
//		<!-- **** Pobablemente no así -->
//		<!--
//		<script type="text/javascript">CookieTool.API.impliedAgreement();</script>
		?>
		<script>
CookieTool.Config.set('link','<?php echo esc_attr( pdrgpd_conf_uri_cookies() ); ?>'); // Enlace a la política de cookies
//CookieTool.Config.set('message', 'Este sitio utliza cookies técnicas -obligatorias- y de estadísticas para uan mejor gestión del contenido, <a href="{{link}}">política de cookies</a>');
CookieTool.Config.set('message', 'Este sitio utliza cookies para una mejor gestión del contenido. Solicitamos tu permiso para implementarlas');
CookieTool.Config.set('agreetext','Aceptar todas'); // Mensaje del botón de aceptar
CookieTool.Config.set('declinetext','Solo seleccionadas'); // Mensaje del botón de No aceptar
CookieTool.Config.set('position', 'bottom'); // top o bottom, la posición del mensaje usando los estilos por defecto.
CookieTool.Config.set('linkName', 'Política de cookies');
CookieTool.API.ask();
		</script>
		<?php
	}
}



// gtag (Google Global Site Tag)
if ( '' != pdrgpd_conf_google_analytics_id() ) {
	add_action('wp_head', 'pdrgpd_inserta_gtag');
	function pdrgpd_inserta_gtag() {
		$pdrgpd_google_analytics_id = pdrgpd_conf_google_analytics_id();
		// Debe ir en el head, antes de cualquier llamada a comandos gtag
		?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $pdrgpd_google_analytics_id; ?>"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
<?php
		// Si se usa el banner y no están aceptadas las cookies, las rechaza de entrada
		if ( pdrgpd_conf_mostrar_banner_cookies() && !pdrgpd_cookie_estadisticas() ) {
		?>
gtag('consent', 'default', {
'ad_storage': 'denied',
'analytics_storage': 'denied'
});
<?php
		}
		?>
gtag('config', '<?php echo $pdrgpd_google_analytics_id; ?>');
</script>

<?php
	}
}


// Facebook Pixel
if ( '' != pdrgpd_conf_facebook_pixel_id() ) {
	add_action('wp_head', 'pdrgpd_inserta_fb_pixel');
	function pdrgpd_inserta_fb_pixel() {
		$pdrgpd_facebook_pixel_id = pdrgpd_conf_facebook_pixel_id();
		// Debe ir en el head
		?>

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
<?php
		// Si se usa el banner y no están aceptadas las cookies, las rechaza de entrada
		if ( pdrgpd_conf_mostrar_banner_cookies() && !pdrgpd_cookie_estadisticas() ) {
		?>
  fbq('consent', 'revoke');
<?php
		}
		?>
  fbq('init', '<?php echo $pdrgpd_facebook_pixel_id; ?>');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo $pdrgpd_facebook_pixel_id; ?>&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

<?php
	}
}


/*
 * Valores cookies
*/

function pdrgpd_cookie_estadisticas() { 
	if( isset( $_COOKIE['pdrgpd_estadisticas'] ) ) {
		if( true == $_COOKIE['pdrgpd_estadisticas'] ) {
			return true;
		}
		else{
			return false;
		}
	}
}

/*
 * Valores configurados
*/

// Mostrar banner de cookies
function pdrgpd_conf_mostrar_banner_cookies() { 
	return esc_html( get_option( 'pdrgpd_mostrar_banner_cookies', '' ) );
}

// Google Tracking code
function pdrgpd_conf_google_analytics_id() { 
	return esc_html( get_option( 'pdrgpd_google_analytics_id', '' ) );
}

// Facebook Pixel
function pdrgpd_conf_facebook_pixel_id() { 
	return esc_html( get_option( 'pdrgpd_facebook_pixel_id', '' ) );
}
