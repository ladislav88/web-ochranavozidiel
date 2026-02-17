
/**
 * Utility function to create an export of the site for FTP upload
 */

// Function to download current page HTML
export const exportSiteForFTP = () => {
  try {
    // Create and download files immediately, before showing the alert
    // This prevents browser popup blockers from interfering
    
    // Create and download .htaccess file
    const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>`;
    
    downloadFile(htaccessContent, '.htaccess', 'text/plain');
    
    // Create and download README with instructions
    const readmeContent = `# Inštrukcie pre nahratie na FTP server domény ochranavozidiel.sk

DÔLEŽITÉ: Ak nemáte prístup k zdrojovému kódu projektu (package.json) a neviete spustiť príkaz 'npm run build',
kontaktujte priamo vývojára alebo správcu webu, ktorý má prístup k zdrojovým súborom.

Postup pre nahratie na FTP server:

1. Pre správne vytvorenie produkčnej verzie stránky je potrebné spustiť príkaz 'npm run build'.
   Tento príkaz sa spúšťa v terminále alebo príkazovom riadku počítača, v priečinku projektu.
   
   Ak nemáte prístup k zdrojovým súborom a nemôžete spustiť build:
   - Kontaktujte správcu webu alebo vývojára
   - Požiadajte ich o vytvorenie "build" verzie a poslanie kompletných súborov
   
2. Po vytvorení buildu nahrajte CELÝ obsah priečinka 'dist' do koreňového adresára vašej domény
   
3. Nahrajte .htaccess súbor (ktorý ste práve stiahli) do koreňového adresára
   
4. Skontrolujte, či boli nahrané všetky súbory a priečinky:
   - index.html (hlavný súbor)
   - assets/ (priečinok so skriptami a štýlmi)
   - lovable-uploads/ (priečinok s obrázkami)
   - .htaccess (súbor pre správne presmerovanie URL)

POZNÁMKA: Index.html súbor, ktorý ste práve stiahli, je len aktuálna stránka, ktorú vidíte.
Pre správne fungovanie stránky je potrebný kompletný build.
`;
    
    downloadFile(readmeContent, 'INSTRUKCIE_FTP.txt', 'text/plain');
    
    // Get the current HTML document as a string
    const htmlContent = document.documentElement.outerHTML;
    downloadFile(htmlContent, 'index.html', 'text/html');
    
    // Show alert after files have started downloading
    setTimeout(() => {
      alert(`
      Súbory by sa mali začať sťahovať automaticky:
      - index.html (aktuálna stránka)
      - .htaccess (súbor pre správne presmerovanie)
      - INSTRUKCIE_FTP.txt (návod na nahratie)
      
      Ak sa súbory nestiahli, skontrolujte, či váš prehliadač neblokuje popup okná.
      
      DÔLEŽITÉ: Ak nemáte prístup k zdrojovým súborom (package.json) a neviete spustiť príkaz 'npm run build',
      kontaktujte priamo vývojára alebo správcu webu, ktorý má prístup k zdrojovým súborom.
      Podrobnejšie informácie nájdete v stiahnutom súbore INSTRUKCIE_FTP.txt.
      `);
    }, 500);
    
    return true;
  } catch (error) {
    console.error('Failed to export site:', error);
    alert("Nastala chyba pri exporte stránky. Prosím, kontaktujte správcu webu na info@ochranavozidiel.sk.");
    return false;
  }
};

// Helper function to download a file - improved to work more reliably across browsers
const downloadFile = (content: string, filename: string, type: string) => {
  try {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    
    // Create an invisible iframe to force download without popup blockers
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Access the iframe's document and create a link there
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      throw new Error('Could not access iframe document');
    }
    
    const link = iframeDoc.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.click();
    
    // Clean up after a delay to ensure download begins
    setTimeout(() => {
      document.body.removeChild(iframe);
      URL.revokeObjectURL(url);
    }, 1000);
    
    console.log(`Download initiated for ${filename}`);
  } catch (err) {
    console.error(`Failed to download ${filename}:`, err);
    // Fallback method if iframe approach fails
    try {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (fallbackErr) {
      console.error(`Fallback download failed for ${filename}:`, fallbackErr);
    }
  }
};
