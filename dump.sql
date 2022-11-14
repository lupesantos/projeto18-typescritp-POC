--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tarefas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tarefas (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    dia date NOT NULL,
    responsavel character varying(255) NOT NULL,
    status character varying(255) DEFAULT 'não realizada'::character varying
);


--
-- Name: tarefas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tarefas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tarefas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tarefas_id_seq OWNED BY public.tarefas.id;


--
-- Name: tarefas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas ALTER COLUMN id SET DEFAULT nextval('public.tarefas_id_seq'::regclass);


--
-- Data for Name: tarefas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tarefas VALUES (4, 'limpar cozinha5', 'deixar tudo limpinho5', '2022-10-10', 'luciano5', 'não realizada');
INSERT INTO public.tarefas VALUES (5, 'limpar cozinha6', 'deixar tudo limpinho6', '2022-10-10', 'luciano6', 'não realizada');
INSERT INTO public.tarefas VALUES (2, 'limpar cozinha2', 'deixar tudo limpinho2', '2022-10-10', 'luciano2', 'realizada');
INSERT INTO public.tarefas VALUES (6, 'limpar quarto', 'deixar tudo limpinho6', '2022-10-10', 'luciano', 'não realizada');
INSERT INTO public.tarefas VALUES (7, 'limpar sua caminha', 'arrumar a caminha', '2022-11-15', 'cacau', 'não realizada');
INSERT INTO public.tarefas VALUES (8, 'limpar sua caminha2', 'arrumar a caminha2', '2022-11-15', 'cacau', 'não realizada');


--
-- Name: tarefas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tarefas_id_seq', 8, true);


--
-- Name: tarefas tarefas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

