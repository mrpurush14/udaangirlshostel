import React, { useState } from 'react';
import { X, Server, Check, Copy, ArrowRight, ShieldCheck, Download, ExternalLink } from 'lucide-react';

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerGuideModal: React.FC<HostingerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedHtaccess, setCopiedHtaccess] = useState(false);
  const [copiedBuildCmd, setCopiedBuildCmd] = useState(false);

  if (!isOpen) return null;

  const htaccessContent = `# Hostinger Apache Configuration for Udaan Girls' Hostel Static Site
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # SPA Routing Fallback
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Browser Caching for Performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`;

  const copyHtaccess = () => {
    navigator.clipboard.writeText(htaccessContent);
    setCopiedHtaccess(true);
    setTimeout(() => setCopiedHtaccess(false), 2000);
  };

  const copyBuildCmd = () => {
    navigator.clipboard.writeText('npm run build');
    setCopiedBuildCmd(true);
    setTimeout(() => setCopiedBuildCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Hostinger Ready
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-['Playfair_Display',serif]">
              Deploying to Hostinger (hPanel)
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
          This static website is pre-configured with relative asset paths (<code className="bg-stone-100 px-1 py-0.5 rounded text-[#931c51]">base: './'</code>), 
          making it 100% compatible with Hostinger Web Hosting, Cloud Hosting, or WordPress Hosting.
        </p>

        {/* 4 Step Deployment Process */}
        <div className="space-y-4">
          
          {/* Step 1 */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#931c51] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h4 className="text-sm font-bold text-stone-900">Build the Static Production Files</h4>
              </div>
              <button
                onClick={copyBuildCmd}
                className="text-xs text-[#931c51] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedBuildCmd ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBuildCmd ? 'Copied!' : 'Copy command'}</span>
              </button>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Run <code className="bg-stone-200/80 px-2 py-0.5 rounded font-mono font-bold text-stone-900">npm run build</code> in the project directory. 
              This generates an optimized static bundle in the <code className="bg-stone-200/80 px-1 py-0.5 rounded font-mono text-stone-900">dist/</code> folder.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#931c51] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="text-sm font-bold text-stone-900">Open Hostinger File Manager</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Log into Hostinger <strong className="text-stone-800">hPanel</strong> → Navigate to <strong className="text-stone-800">Websites</strong> → Select your domain → Click on <strong className="text-stone-800">File Manager</strong>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#931c51] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="text-sm font-bold text-stone-900">Upload to <code className="text-[#931c51]">public_html/</code></h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Open the <code className="bg-stone-200/80 px-1 py-0.5 rounded font-mono text-stone-900">public_html</code> folder in Hostinger. 
              Upload all files from your local <code className="bg-stone-200/80 px-1 py-0.5 rounded font-mono text-stone-900">dist/</code> folder (including <code className="font-mono">index.html</code>, the <code className="font-mono">assets/</code> folder, and images).
            </p>
          </div>

          {/* Step 4: .htaccess */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#931c51] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h4 className="text-sm font-bold text-stone-900">Optional: Add <code className="text-[#931c51]">.htaccess</code> for Hostinger</h4>
              </div>
              <button
                onClick={copyHtaccess}
                className="text-xs bg-white border border-stone-300 hover:border-stone-400 px-2.5 py-1 rounded-lg text-stone-700 font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedHtaccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHtaccess ? 'Copied .htaccess' : 'Copy .htaccess'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono bg-stone-900 text-stone-200 p-3 rounded-xl overflow-x-auto max-h-36">
              {htaccessContent}
            </pre>
          </div>

        </div>

        {/* Hostinger Features summary */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero server dependencies • Pure static HTML/JS/CSS</span>
          </div>
          <button
            onClick={onClose}
            className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
};
