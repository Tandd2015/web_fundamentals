SELECT clients.first_name , clients.last_name, billing.amounts, billing.charged_datetime
FROM clients
JOIN billing ON clients.id= billing.clients_id;

SELECT sites.domain_name, leads.first_name, leads.last_name
FROM sites
JOIN leads ON sites.id= leads.sites_id;

SELECT clients.first_name AS client_first_name, clients.last_name AS client_last_name, sites.domain_name, leads.first_name AS leads_first_name
FROM clients 
JOIN sites ON clients.id= sites.clients_id
JOIN leads ON sites.id= leads.sites_id;

SELECT clients.first_name, clients.last_name, sites.domain_name
FROM clients
LEFT JOIN sites ON clients.id= sites.clients_id;

SELECT clients.first_name, clients.last_name, sites.domain_name
FROM clients
RIGHT JOIN sites ON clients.id= sites.clients_id;

SELECT clients.first_name, clients.last_name, SUM(billing.amount)
FROM clients
JOIN billing ON clients.id= billing.clients_id
GROUP BY clients.id;

SELECT GROUP_CONCAT(' ', sites.domain_name) AS domains, clients.first_name, clients.last_name
FROM clients
JOIN sites ON clients.id = sites.clients_id
GROUP BY clients.id;

SELECT count(leads.id), sites.domain_name
FROM sites
JOIN leads ON sites.id= leads.sites_id
GROUP BY sites.id;

-- One to One
SELECT * FROM customers 
JOIN addresses ON addresses.id = customers.address_id;

-- One to Many
SELECT * FROM orders
JOIN customers ON customers.id= orders.customer_id;

-- Many to Many
SELECT * FROM orders
JOIN items_orders ON orders.id= items_orders.order_id
JOIN items ON items.id= items_orders.item_id;

