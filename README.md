PROJE AÇIKLAMASI
Bu çalışma, bir işletmenin sunduğu hizmetlerin ve bu hizmetlere yönelik müşteri randevularının dijital ortamda yönetilmesi amacıyla geliştirilmiş RESTful bir API projesidir. Uygulama, Node.js ve Express.js teknolojileri kullanılarak inşa edilmiştir. Yazılım mimarisi olarak Model-View-Controller (MVC) prensipleri benimsenmiş; veritabanı iletişimi, iş mantığı ve yönlendirme işlemleri birbirinden modüler olarak ayrılmıştır. Veri saklama katmanında MySQL ilişkisel veritabanı yönetim sistemi tercih edilmiştir.

SENARYO TANIMI VE İŞ KURALLARI
Sistem üzerinde veri tutarlılığını sağlamak ve hatalı işlemleri engellemek amacıyla aşağıdaki iş kuralları (business logic) sunucu tarafında kodlanmıştır:

Geçmiş Tarih Kısıtlaması: Kullanıcılar randevu oluştururken veya mevcut bir randevuyu silmek istediklerinde sistem tarih kontrolü yapar. Güncel tarihten daha eski bir zamana randevu alınması veya geçmiş randevuların silinmesi engellenerek veri güvenliği sağlanır.

Aktif Hizmet Kontrolü: Randevu oluşturma sürecinde, seçilen hizmetin sistemdeki durumu kontrol edilir. Yalnızca "is_active" değeri 1 (aktif) olan hizmetler için randevu kabul edilir; pasif durumdaki hizmetlere randevu girişi sistem tarafından reddedilir.

KURULUM ADIMLARI
Projenin yerel sunucuda çalıştırılabilmesi için aşağıdaki teknik adımların sırasıyla uygulanması gerekmektedir:

Repository Klonlama: Proje dosyaları git clone https://github.com/aycayildirimm/sunucuProje.git komutu ile yerel bilgisayara indirilir.

Bağımlılıkların Yüklenmesi: Terminal üzerinden proje dizinine gidilerek npm install komutu çalıştırılır ve gerekli kütüphaneler yüklenir.

Veritabanı Yapılandırması: sunucu_proje.sql dosyası MySQL sunucusuna aktarılır. .env.example dosyasının bir kopyası .env adıyla oluşturularak veritabanı bağlantı bilgileri (host, user, password, database) bu dosyaya girilir.

Uygulamanın Başlatılması: Sunucu node app.js komutu ile aktif hale getirilir.

4. API ENDPOINT LİSTESİ
GET	/api/users	Kayıtlı tüm kullanıcı bilgilerini döndürür.
GET	/api/services	Sunulan tüm hizmetlerin listesini getirir.
POST	/api/appointments	Yeni bir randevu kaydı oluşturur (İş kuralları denetimlidir).
GET	/api/appointments	Mevcut tüm randevuları listeler.
DELETE/api/appointments/:idBelirli bir randevu kaydını siler (Tarih kontrolü yapılır).

