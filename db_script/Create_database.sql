
create table tclientpersone (
  id_index serial,
  idclient int,
  full_name varchar(255),
  salary int,
  education varchar(255),
  externalid int,
  address1 varchar(255),
  address2 varchar(255),
  telephone varchar(255),
  secretanswer varchar(255),
  primary key (id_index),
  unique (idclient)
);


create table cards_main (
  id_index serial,
  branch int,
  card_number varchar(255),
  id_for_processor int,           
  crd_typ varchar(255),
  crd_stat varchar(255),
  createdate timestamp,
  cardproduct int,
  signstat varchar(255),
  idclient int,
  primary key (id_index),
  foreign key (idclient) references tclientpersone(idclient),
  unique(id_for_processor),
  unique(card_number),
  unique(signstat)
  
);



-- the list of accounts created when the card was opened for the customer.
create table tacc2card (
  id_index serial,
  card_id int,
  accountno varchar(255),
  monthly_limit int,
  id_for_processor int,
  description varchar(255),
  card_number varchar(255),
  primary key (id_index),
  foreign key (card_id) references cards_main(id_index),
  foreign key (id_for_processor) references cards_main(id_for_processor),
  foreign key (card_number) references cards_main(card_number),
  unique(accountno)
);

-- an explanatory list of the accounts created when the card was opened to the customer.
create table taccount (
  id_index serial,
  card_id int,
  accountno varchar(255),
  accounttype int,
  currencyno int,
  idclient int,
  remain int,
  opendate date,
  closedate date,
  primary key (id_index),
  foreign key (card_id) references tacc2card(id_index),
  foreign key (accountno) references tacc2card(accountno)
);

-- list of card contracts created between the client and the bank.
create table tcontractcarditem (
  id_index serial,
  contractnumber varchar(255),
  itemcode int,
  card_number varchar(255),
  idclient int,
  mbr2 int,
  disbursedate date,
  closedate date,
  primary key (id_index),
  foreign key (card_number) references cards_main(card_number),
  unique(contractnumber)
  );
  
  -- a detailed list of card agreements created between the client and the bank.
create table tcontract (
  id_index serial,
  contractcard_fk int,
  contractnumber varchar(255),
  type int,
  idclient int,
  createdate date,
  createclerk int,
  closedate date,
  primary key (id_index),
  foreign key (contractcard_fk) references tcontractcarditem(id_index),
  foreign key (contractnumber) references tcontractcarditem(contractnumber)
);

-- signature sample of card contracts created between the client and the bank
create table treferencecardsign (
  id_index serial,
  cardsign int,
  name varchar(255),
  remark varchar(255),
  signtype int,
  crd_stat int,
  additional int,
  foreign key (id_index) references cards_main(id_index)
);
