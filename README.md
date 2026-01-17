# Online Randevu ve Hizmet Yönetim Sistemi RESTful API

Bu proje, Node.js ve MySQL kullanılarak geliştirilmiş, ölçeklenebilir ve modüler bir Online Randevu ve Hizmet Yönetim Sistemi API'sıdır. Proje, endüstri standardı olan **MVC (Model-View-Controller)** mimarisini temel alır ve iş mantığını ayrıştırmak için **MSC (Model-Service-Controller)** katmanlı yapısını kullanır.

## 🚀 Mimari Yapı

Proje, sorumlulukların ayrılığı (SoC) prensibine uygun olarak katmanlara ayrılmıştır:

*   **Models**: Veritabanı sorgularını (SQL) yönetir ve veri erişim katmanıdır.
*   **Services**: Tüm iş kurallarını (Business Logic) barındırır.
*   **Controllers**: HTTP isteklerini karşılar, Service katmanını çağırır ve yanıt döner.
*   **Routes**: URL yönlendirmelerini controller fonksiyonlarına bağlar.

## ⚙️ Özellikler ve İş Kuralları

Bu API, sadece veri kaydetmenin ötesinde, veri bütünlüğünü ve iş akışını koruyan kritik kontrollere sahiptir:

1.  **Pasif Hizmet Kontrolü**:
    *   Kullanıcılar randevu oluştururken seçtikleri hizmetin aktif olup olmadığı kontrol edilir.
    *   Veritabanında durumu `pasif` (0) olan bir hizmet için randevu alınamaz. API hata mesajı döndürür.

2.  **Geçmiş Randevu Koruması**:
    *   Geçmiş tarihli randevuların silinmesi veya güncellenmesi engellenmiştir.
    *   Bu sayede tarihsel veri bütünlüğü korunur.

3.  **Güvenilir Port Yönetimi**:
    *   Sunucu başlatılırken port çakışmalarını otomatik algılar ve müsait olan bir sonraki portu kullanır.

## 🛠️ Teknolojiler

*   **Node.js**: Runtime environment.
*   **Express.js**: Web server framework.
*   **MySQL2**: Veritabanı sürücüsü (Connection Pool yapısı ile).
*   **Dotenv**: Ortam değişkenleri yönetimi.

## 📦 Kurulum

1.  Projeyi indirin:
    ```bash
    git clone <repo-url>
    ```
2.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
3.  `.env` dosyasını yapılandırın (Veritabanı bilgileri).
4.  Sunucuyu başlatın:
    ```bash
    npm start
    ```

## 🧪 API Endpoints

*   **Users**: `/api/users` (GET, POST, PUT, DELETE)
*   **Services**: `/api/services` (GET, POST, PUT, DELETE)
*   **Appointments**: `/api/appointments` (GET, POST, PUT, DELETE)
