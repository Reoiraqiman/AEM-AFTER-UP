(function(){
  const cfg = window.AEM_ANALYTICS || {};
  const id = typeof cfg.ga4 === 'string' ? cfg.ga4.trim() : '';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  if (!id || !/^G-[A-Z0-9]+$/i.test(id)) return;
  if (document.querySelector('script[data-aem-ga4]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  s.dataset.aemGa4 = '1';
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[data-wa],a[data-phone]');
    if (!a) return;
    gtag('event', a.hasAttribute('data-wa') ? 'whatsapp_click' : 'phone_click', {
      event_category: 'contact',
      page_location: location.href
    });
  });
})();
