INSERT INTO menus (id, menu_type, menu_name, position) values (0, 'header', 'Resturante', 1);
INSERT INTO menus (id, menu_type, menu_name, position) values (1, 'header', 'Formatii si Dj', 2);
INSERT INTO menus (id, menu_type, menu_name, position) values (2, 'header', 'Foto si Video', 3);
INSERT INTO menus (id, menu_type, menu_name, position) values (3, 'header', 'Wedding Planner', 4);
INSERT INTO users (userID, username, email, password, agreed_terms, gender, lifecycle) values (1, 'Adam','admin@admin.ro', '$2a$04$I9Q2sDc4QGGg5WNTLmsz0.fvGv3OjoZyj81PrSFyGOqMphqfS2qKu', true, 'Male','Approved');
INSERT INTO role (id, role_name) VALUES (1, 'Admin');
INSERT INTO user_role (user_id, role_id) VALUES (1, 1);
-- INSERT INTO supplier (name, email, password, agreedTerms, roles, memeberSince, lastActive, lifecycle, pictures, place, minPrice, minInv, maxInv, outdoor, accommodation, fireworks, events, preparations, parking)
--             values ('ion', 'ion@ion1.com', 'pass', true, null, null, null, null, null, 'Ploiesti', '100', '20', '22',true ,true ,true ,true ,true ,true);
