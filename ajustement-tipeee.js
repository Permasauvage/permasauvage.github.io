// Ajustement automatique de la hauteur des encarts Tipeee.
// Le greffon Tipeee fige ses cadres intégrés à 715 px de haut, ce qui laisse
// un grand espace blanc quand le contenu est plus court. La hauteur de base
// est donc recalée dans style.css (section « Encart Tipeee »).
// En complément : l'ancien greffon prévoyait que la page Tipeee envoie sa
// hauteur réelle au chargement (message « nuxtLoaded »). La version actuelle
// de Tipeee ne l'envoie plus (vérifié le 2026-07-15), mais on garde l'écoute :
// si Tipeee réactive ce signal, l'ajustement redeviendra exact tout seul.
window.addEventListener('message', function (evenement) {
  var hote;
  try {
    hote = new URL(evenement.origin).hostname;
  } catch (erreur) {
    return;
  }
  // On n'accepte que les messages venant de Tipeee.
  if (!/(^|\.)tipeee\.(com|fr)$/.test(hote)) return;

  var donnees = evenement.data;
  if (!donnees || donnees.code !== 'nuxtLoaded' || !donnees.params) return;
  var hauteur = parseInt(donnees.params.height, 10);
  if (!hauteur || hauteur < 100) return;

  // On retrouve le cadre qui a envoyé le message et on l'ajuste.
  document.querySelectorAll('iframe[src*="tipeee"]').forEach(function (cadre) {
    if (cadre.contentWindow === evenement.source) {
      // « important » pour passer devant la hauteur de secours de style.css.
      cadre.style.setProperty('height', hauteur + 'px', 'important');
      cadre.setAttribute('height', hauteur);
    }
  });
});
