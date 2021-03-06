--
-- Base de données :  "AAH"
--

BEGIN;

--
-- Déchargement des données de la table "aah"
--

INSERT INTO "aah" ("id", "date", "montant_aah", "taux_couple", "taux_enfant") VALUES

(1	,"01/01/2002",	"569,38",	"2"	,"0,5"),
(2	,"01/01/2003",	"577,92",	"2"	,"0,5"),
(3	,"01/01/2004",	"587,74",	"2"	,"0,5"),
(4	,"01/01/2005",	"599,79",	"2"	,"0,5"),
(5	,"01/01/2006",	"610,28",	"2"	,"0,5"),
(6	,"01/01/2007",	"621,27",	"2"	,"0,5"),
(7	,"01/01/2008",	"628,1",	"2"	,"0,5"),
(8	,"01/09/2008",	"652,6",	"2"	,"0,5"),
(9	,"01/04/2009",	"666,96",	"2"	,"0,5"),
(10	,"01/09/2009",	"681,63",	"2"	,"0,5"),
(11	,"01/01/2010",	"681,63",	"2"	,"0,5"),
(12	,"01/04/2010",	"696,63",	"2"	,"0,5"),
(13	,"01/09/2010",	"711,95",	"2"	,"0,5"),
(14	,"01/04/2011",	"727,61",	"2"	,"0,5"),
(15	,"01/09/2011",	"743,62",	"2"	,"0,5"),
(16	,"01/04/2012",	"759,98",	"2"	,"0,5"),
(17	,"01/09/2012",	"776,59",	"2"	,"0,5"),
(18	,"01/01/2013",	"776,59",	"2"	,"0,5"),
(19	,"01/09/2013",	"790,18",	"2"	,"0,5"),
(20	,"01/09/2014",	"800,45",	"2"	,"0,5"),
(21	,"01/09/2015",	"807,65",	"2"	,"0,5"),
(22	,"01/04/2016",	"808,46",	"2"	,"0,5"),
(23	,"01/04/2017",	"810,89",	"2"	,"0,5"),
(24	,"01/04/2018",	"819",	"2"	,"0,5"),
(25	,"01/11/2018",	"860",	"1,89",	"0,5"),
(26	,"01/11/2019",	"900",	"1,81",	"0,5"),
(27	,"01/04/2020",	"902,7",	"1,81",	"0,5")

--
-- Déchar",g"ement des données de la table "users"
--

INSERT INTO "user" ("id", "firstname", "lastname", "email", "password") VALUES

(1, 'Régis', 'BRUNET BLEC', 'regis.blec@gmail.com', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG')



--
-- Déchargement des données de la table "smic"
--

INSERT INTO "smic" ("id", "date", "smic_brut_horaire" ) VALUES

-- smic mensuelle *151.67

(1, "01/01/2002", "6,67"),
(2, "01/07/2002", "6,83"),
(3, "01/07/2003", "7,19"),
(4, "01/07/2004", "7,61"),
(5, "01/07/2005", "8,03"),
(6, "01/07/2006", "8,27"),
(7, "01/01/2007", "8,44"),
(8, "01/05/2008", "8,63"),
(9, "01/07/2008", "8,71"),
(10, "01/07/2009", "8,82"),
(11, "01/01/2010", "8,86"),
(12, "01/01/2011", "9,00"),
(13, "01/12/2011", "9,19"),
(14, "01/01/2012", "9,22"),
(15, "01/07/2012", "9,40"),
(16, "01/07/2013", "9,43"),
(17, "01/01/2014", "9,53"),
(18, "01/01/2015", "9,61"),
(19, "01/01/2016", "9,67"),
(20, "01/01/2017", "9,76"),
(21, "01/01/2018", "9,88"),
(22, "01/01/2019", "10,03"),
(23, "01/01/2020", "10,15"),
(24, "01/01/2021", "10,25"),




