-- 1. Kullanıcı Ekleme
-- Bu komut 'users' tablosuna bir test kullanıcısı ekler.
INSERT INTO users (name, email, role) VALUES 
('Test Kullanicisi', 'test@ornek.com', 'customer');

-- 2. Hizmetleri Ekleme
-- Bu komut 'services' tablosuna biri AKTİF (is_active=1), biri PASİF (is_active=0) iki hizmet ekler.
INSERT INTO services (name, duration, price, is_active) VALUES 
('Standart Muayene', 30, 200.00, 1),
('Ozel Terapi (Bakimda)', 60, 500.00, 0);

-- Not: phpMyAdmin'de bu komutları çalıştırmak için:
-- 1. 'sunucu_proje' veritabanına tıklayın.
-- 2. Üst menüden 'SQL' sekmesine gelin.
-- 3. Bu kutudaki kodları oraya yapıştırın.
-- 4. 'Git' (Go) butonuna basın.
