PGDMP     )    :                x            demo    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16505    demo    DATABASE     �   CREATE DATABASE demo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Finnish_Finland.1252' LC_CTYPE = 'Finnish_Finland.1252';
    DROP DATABASE demo;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            	           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16508 
   bakedgoods    TABLE     �   CREATE TABLE public.bakedgoods (
    id integer NOT NULL,
    tyyppi character varying NOT NULL,
    nimi character varying NOT NULL,
    kuvaus character varying NOT NULL
);
    DROP TABLE public.bakedgoods;
       public         heap    postgres    false    3            �            1259    16506    bakedgoods_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bakedgoods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.bakedgoods_id_seq;
       public          postgres    false    203    3            
           0    0    bakedgoods_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bakedgoods_id_seq OWNED BY public.bakedgoods.id;
          public          postgres    false    202            �
           2604    16511    bakedgoods id    DEFAULT     n   ALTER TABLE ONLY public.bakedgoods ALTER COLUMN id SET DEFAULT nextval('public.bakedgoods_id_seq'::regclass);
 <   ALTER TABLE public.bakedgoods ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                      0    16508 
   bakedgoods 
   TABLE DATA           >   COPY public.bakedgoods (id, tyyppi, nimi, kuvaus) FROM stdin;
    public          postgres    false    203                       0    0    bakedgoods_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.bakedgoods_id_seq', 7, true);
          public          postgres    false    202            �
           2606    16516    bakedgoods bakedgoods_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bakedgoods
    ADD CONSTRAINT bakedgoods_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bakedgoods DROP CONSTRAINT bakedgoods_pkey;
       public            postgres    false    203               �  x���=��0�k�L�,��6U�u�Eb�J3��ш?#�C��o�呶�A�����7�Ӽ1{
M��|��
��}�Z9���^ݹ%��þ��>�VU���9�(��?�Oc�|���,��K�U[s$��4��*ki-=��Y8z��1wb�q�*��|�W����y�P=�����G^(F�'������S���쥬�t^6O�pV?�a؅ K�9m���IRCQ�S���J�9b�n�(A�{tt�+D�^�y4}\q�un1:^�ȅIVA���`R��ڲ���/F4T��u�xC�+.���@t���/�G�MKˈۿ�ۮ�qL2X^�V��A}��%����XP+���}�1ф�>�~��.�������|�Ȏ�[ľt�~���`��43,                     0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16505    demo    DATABASE     �   CREATE DATABASE demo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Finnish_Finland.1252' LC_CTYPE = 'Finnish_Finland.1252';
    DROP DATABASE demo;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            	           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16508 
   bakedgoods    TABLE     �   CREATE TABLE public.bakedgoods (
    id integer NOT NULL,
    tyyppi character varying NOT NULL,
    nimi character varying NOT NULL,
    kuvaus character varying NOT NULL
);
    DROP TABLE public.bakedgoods;
       public         heap    postgres    false    3            �            1259    16506    bakedgoods_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bakedgoods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.bakedgoods_id_seq;
       public          postgres    false    203    3            
           0    0    bakedgoods_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bakedgoods_id_seq OWNED BY public.bakedgoods.id;
          public          postgres    false    202            �
           2604    16511    bakedgoods id    DEFAULT     n   ALTER TABLE ONLY public.bakedgoods ALTER COLUMN id SET DEFAULT nextval('public.bakedgoods_id_seq'::regclass);
 <   ALTER TABLE public.bakedgoods ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                      0    16508 
   bakedgoods 
   TABLE DATA           >   COPY public.bakedgoods (id, tyyppi, nimi, kuvaus) FROM stdin;
    public          postgres    false    203   I                  0    0    bakedgoods_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.bakedgoods_id_seq', 7, true);
          public          postgres    false    202            �
           2606    16516    bakedgoods bakedgoods_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bakedgoods
    ADD CONSTRAINT bakedgoods_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bakedgoods DROP CONSTRAINT bakedgoods_pkey;
       public            postgres    false    203           