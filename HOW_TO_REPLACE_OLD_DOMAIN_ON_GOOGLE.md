# How to Replace `studyzonelibrary.online` with `udaanhostels.online` on Google Search

## 1. The Core Issue
Google previously indexed your website under `studyzonelibrary.online`. When you changed the domain to `udaanhostels.online`, Google continues to display the cached version of the old domain until you instruct Google that the site has permanently moved via an **HTTP 301 Permanent Redirect**.

---

## 2. The 1-Minute Fix on Hostinger
If you still have `studyzonelibrary.online` active in your Hostinger account:

1. Log into **Hostinger hPanel** (hpanel.hostinger.com).
2. Go to **Websites** -> Select **`studyzonelibrary.online`** -> Open **File Manager**.
3. In `public_html/`, open the `.htaccess` file (or create one).
4. Paste this exact rule at the very top:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_HOST} ^(www\.)?studyzonelibrary\.online$ [NC]
  RewriteRule ^(.*)$ https://udaanhostels.online/$1 [R=301,L]
</IfModule>
```

5. Save the file.
**Result:** Any visitor or Googlebot that tries to open `studyzonelibrary.online` is immediately redirected with HTTP status 301 to `https://udaanhostels.online/`. Google will transfer 100% of the keyword authority and ranking to your new domain within 24–72 hours.

---

## 3. Fast-Track Google Indexing for `udaanhostels.online`
1. Go to **[Google Search Console](https://search.google.com/search-console)**.
2. Add Property: `https://udaanhostels.online`.
3. In the left menu, click **Sitemaps**.
4. Enter `sitemap.xml` and click **Submit**.
5. Use the top **URL Inspection** search bar, type `https://udaanhostels.online/`, and click **"Request Indexing"**.
6. (Optional) In Search Console settings for `studyzonelibrary.online`, use the **Change of Address** tool to designate `https://udaanhostels.online` as the target domain.

---

## 4. Current Website SEO Status
* **Canonical URL**: `https://udaanhostels.online/`
* **Sitemap**: `https://udaanhostels.online/sitemap.xml` (Includes Google Image tags for logo, banner, and mess menu)
* **Robots.txt**: `https://udaanhostels.online/robots.txt`
* **Target Keywords**: `udaan hostels patna`, `hostels in patna`, `udaan boys hostels`, `Udaan Girls Hostel`, `Hostel in Patna Boring Road`, `PG for Girls`, `PG for boys`.
* **JSON-LD Schema**: Registered `WebSite`, `Hostel`, `LocalBusiness`, `BreadcrumbList`, and `FAQPage`.
