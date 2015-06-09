
SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE "AdminRobot";
ALTER ROLE "AdminRobot" WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION PASSWORD 'md5717b598fe6608c8bae5e2a69a8984893' VALID UNTIL 'infinity';

CREATE ROLE "Galileo";
ALTER ROLE "Galileo" WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION PASSWORD 'md54656d3214d60cade4814dc5f35f986ea' VALID UNTIL 'infinity';

CREATE ROLE "Insertion_Data";
ALTER ROLE "Insertion_Data" WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION PASSWORD 'md526066914d6564a49d400a246cc8209c4' VALID UNTIL 'infinity';

CREATE ROLE "Users";
ALTER ROLE "Users" WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOLOGIN NOREPLICATION PASSWORD 'md54c502dc6ce14797e2bb86775ccf09cbf' VALID UNTIL 'infinity';

CREATE ROLE "WebApp";
ALTER ROLE "WebApp" WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION PASSWORD 'md5dbe962b5e693c2d700c2f2b435499a4a' VALID UNTIL 'infinity';

CREATE ROLE cydev;
ALTER ROLE cydev WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION PASSWORD 'md5ad8d95aaa1696aa63dd9c4c246572184' VALID UNTIL 'infinity';

--
-- Role memberships
--

GRANT "Insertion_Data" TO "Galileo" GRANTED BY postgres;
GRANT "Users" TO "WebApp" GRANTED BY postgres;
--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Nuage; Type: TABLE; Schema: public; Owner: AdminRobot; Tablespace: 
--

CREATE TABLE "Nuage" (
    "Yi" integer,
    "Xi" integer,
    "PosY" integer,
    "PosX" integer,
    id integer NOT NULL
);


ALTER TABLE "Nuage" OWNER TO "AdminRobot";

--
-- Name: Nuage_id_seq; Type: SEQUENCE; Schema: public; Owner: AdminRobot
--

CREATE SEQUENCE "Nuage_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Nuage_id_seq" OWNER TO "AdminRobot";

--
-- Name: Nuage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: AdminRobot
--

ALTER SEQUENCE "Nuage_id_seq" OWNED BY "Nuage".id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: AdminRobot
--

ALTER TABLE ONLY "Nuage" ALTER COLUMN id SET DEFAULT nextval('"Nuage_id_seq"'::regclass);


--
-- Data for Name: Nuage; Type: TABLE DATA; Schema: public; Owner: AdminRobot
--

COPY "Nuage" ("Yi", "Xi", "PosY", "PosX", id) FROM stdin;
\.


--
-- Name: Nuage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: AdminRobot
--

SELECT pg_catalog.setval('"Nuage_id_seq"', 1, true);


--
-- Name: id_Points; Type: CONSTRAINT; Schema: public; Owner: AdminRobot; Tablespace: 
--

ALTER TABLE ONLY "Nuage"
    ADD CONSTRAINT "id_Points" PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

--REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: Nuage; Type: ACL; Schema: public; Owner: AdminRobot
--

--REVOKE ALL ON TABLE "Nuage" FROM PUBLIC;
REVOKE ALL ON TABLE "Nuage" FROM "AdminRobot";
GRANT ALL ON TABLE "Nuage" TO "AdminRobot";
GRANT INSERT ON TABLE "Nuage" TO "Insertion_Data";
GRANT SELECT ON TABLE "Nuage" TO "Users";


--
-- Name: Nuage_id_seq; Type: ACL; Schema: public; Owner: AdminRobot
--

--REVOKE ALL ON SEQUENCE "Nuage_id_seq" FROM PUBLIC;
REVOKE ALL ON SEQUENCE "Nuage_id_seq" FROM "AdminRobot";
GRANT ALL ON SEQUENCE "Nuage_id_seq" TO "AdminRobot";
GRANT ALL ON SEQUENCE "Nuage_id_seq" TO PUBLIC;
GRANT ALL ON SEQUENCE "Nuage_id_seq" TO "Insertion_Data";


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON SEQUENCES  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON SEQUENCES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT ON SEQUENCES  TO "Users" WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT INSERT ON TABLES  TO "Insertion_Data";
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT ON TABLES  TO "Users";


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON TABLES  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON TABLES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT INSERT ON TABLES  TO "Insertion_Data" WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT ON TABLES  TO "Users" WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--



