PGDMP     &        	            x           demo    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16505    demo    DATABASE     �   CREATE DATABASE demo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Finnish_Finland.1252' LC_CTYPE = 'Finnish_Finland.1252';
    DROP DATABASE demo;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16508 
   bakedgoods    TABLE     �   CREATE TABLE public.bakedgoods (
    id integer NOT NULL,
    tyyppi character varying NOT NULL,
    nimi character varying NOT NULL,
    kuvaus character varying NOT NULL,
    ainesosat character varying
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
       public          postgres    false    3    203                       0    0    bakedgoods_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bakedgoods_id_seq OWNED BY public.bakedgoods.id;
          public          postgres    false    202            �            1259    16517    users    TABLE     p   CREATE TABLE public.users (
    username character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    3            �
           2604    16511    bakedgoods id    DEFAULT     n   ALTER TABLE ONLY public.bakedgoods ALTER COLUMN id SET DEFAULT nextval('public.bakedgoods_id_seq'::regclass);
 <   ALTER TABLE public.bakedgoods ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            	          0    16508 
   bakedgoods 
   TABLE DATA           I   COPY public.bakedgoods (id, tyyppi, nimi, kuvaus, ainesosat) FROM stdin;
    public          postgres    false    203            
          0    16517    users 
   TABLE DATA           3   COPY public.users (username, password) FROM stdin;
    public          postgres    false    204                       0    0    bakedgoods_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.bakedgoods_id_seq', 10, true);
          public          postgres    false    202            �
           2606    16516    bakedgoods bakedgoods_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bakedgoods
    ADD CONSTRAINT bakedgoods_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bakedgoods DROP CONSTRAINT bakedgoods_pkey;
       public            postgres    false    203            �
           2606    16524    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    204            	   �  x��W�n�8]�_�.
؀b����3��M�&���۰M�DҀv��?�_�7��'�%s.%Y��8�l�����s�9�r�[p�]�f�P8��R��H��R�\3�,���?�U�3�9[*��N��ۈXo���&b�(�ˈ�Ef��1Y�O��NrD ����D�gÈicw�6�gcL��ǘ���l5��y�N�S�&�+l��D��X&�a�z�j4���J����eγ�&��o\ |Y����)�y��"7	������� 
�r6��{�U)�V*E�3F��6�n�2���2e6�	�|k	����O��2��H"����R��<>OIK���56���2�|J����� �3Yn��R�'�3����	�u�����&���ϛ1' ����{
s�lL���N)�1�S�����}�-��h�l69B��I��p�HUn@Y�쎢R�$ U>���j>zo��SM�dL��ԓ`c�ҺY������8�Y�%@'�+,|��V����|md"���I�\�n�xFp�U�W��h�\�[�٘�f��󋛫�-ο~��rb��9�w������H�k1��_~�v9o2v{��r������.i�"�:���w�o�.�*"�i+Gh�{��gR)%%����ޒ�5R�Ǭ�IȍQV�����O�H�!1�f�uV_מж��}��*�<F�A_%yCnr��"c�'6Rsf�����Z�-���F�%����R^k�iS��`C>,k�Kq���#�m�t7�r`���4�GQ�>Q�exܐ+�ÂB�ڎ��l'-���G��u����0B_S7��Wŷ�>�����0���ZnMfO¡���hkТͽ4��`�i�O�z�oxF���/ ��[�T �R&�u�M�JPS�����4űp�����B#c�)�NR^���#�F^�5�P���80��;��;��M�������*\2��O��e]�?`"�;�8D�ÚL9c��Z``���2S�Z��ND|��U�i�èֻ1��-�Z|����1�|(Q��fE��h�*�C� �2w�^+�E�o][�&<B�$�zj#eJ�������΁�[n�;�C�^Ͻ�y�)�K'>���Zv=�%�����%G�Z[���ϞW�5�|kEb)�>����˛�OT�sTJYb�%B������*��I���tMe�SS����hs-�E�$V$��@�ѽk��g���z�C�T�������VM�5��2�n��=D��^�^MJ�NDľ���p���A��Ee�vh,%�N��p��8j�DY2�����B�	�wm2)و	̅y���>Z�.q³�c��LZ�LA@т���ծ|v�ܮ�U+�.M�
��G��%.Pi�������ܼU����5����T���
��z�߹���e=P�vMX�����`�B�?bDB]�t'`[ض�IA�I�!�4ghI��0YZ�3T�招��k8�e�}����!+�o�j7XQ1����T+)9�AD(�U�%)FytKzԾK��Kv����e��Ձ�.��f�4�{9XRV�	��Qn�<m6���
��2���;�� U����֪�*EQ�"ucr6���VOs��ؽ%�Tw�vo��];���Wp�0�u�*�$������E��C]�V�Բl�rڈ0(#�'㚴&7������{��!��R�P�5��X=�-�+ ���m����������'���?G�~�?kxo�      
      x�+N-(��,6.(0������ 3n�                     0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16505    demo    DATABASE     �   CREATE DATABASE demo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Finnish_Finland.1252' LC_CTYPE = 'Finnish_Finland.1252';
    DROP DATABASE demo;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16508 
   bakedgoods    TABLE     �   CREATE TABLE public.bakedgoods (
    id integer NOT NULL,
    tyyppi character varying NOT NULL,
    nimi character varying NOT NULL,
    kuvaus character varying NOT NULL,
    ainesosat character varying
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
       public          postgres    false    3    203                       0    0    bakedgoods_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bakedgoods_id_seq OWNED BY public.bakedgoods.id;
          public          postgres    false    202            �            1259    16517    users    TABLE     p   CREATE TABLE public.users (
    username character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    3            �
           2604    16511    bakedgoods id    DEFAULT     n   ALTER TABLE ONLY public.bakedgoods ALTER COLUMN id SET DEFAULT nextval('public.bakedgoods_id_seq'::regclass);
 <   ALTER TABLE public.bakedgoods ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            	          0    16508 
   bakedgoods 
   TABLE DATA           I   COPY public.bakedgoods (id, tyyppi, nimi, kuvaus, ainesosat) FROM stdin;
    public          postgres    false    203   i       
          0    16517    users 
   TABLE DATA           3   COPY public.users (username, password) FROM stdin;
    public          postgres    false    204   �                  0    0    bakedgoods_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.bakedgoods_id_seq', 10, true);
          public          postgres    false    202            �
           2606    16516    bakedgoods bakedgoods_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bakedgoods
    ADD CONSTRAINT bakedgoods_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bakedgoods DROP CONSTRAINT bakedgoods_pkey;
       public            postgres    false    203            �
           2606    16524    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    204           