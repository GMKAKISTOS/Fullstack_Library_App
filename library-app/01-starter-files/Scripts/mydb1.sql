SELECT * FROM checkout;

INSERT INTO checkout VALUES (4, 'panos_chron@hotmail.com', '2023-05-22', '2023-06-25', 1);
INSERT INTO checkout VALUES (5, 'panos_chron@hotmail.com', '2024-05-22', '2024-06-25', 1);
COMMIT;

DELETE FROM checkout WHERE id IN (4, 5, 6);
COMMIT;
ALTER TABLE checkout AUTO_INCREMENT = 4;

