PGDMP     1                    |            testpracticeviamatica    14.12 (Homebrew)    14.12 (Homebrew) &    ^           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            _           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            `           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            a           1262    16385    testpracticeviamatica    DATABASE     `   CREATE DATABASE testpracticeviamatica WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
 %   DROP DATABASE testpracticeviamatica;
                jonathanmacias    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                jonathanmacias    false            b           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   jonathanmacias    false    3            �            1259    16386    person    TABLE     �   CREATE TABLE public.person (
    id integer NOT NULL,
    firstname character varying,
    lastname character varying,
    age integer
);
    DROP TABLE public.person;
       public         heap    postgres    false    3            �            1259    16391    person_id_seq    SEQUENCE     �   CREATE SEQUENCE public.person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.person_id_seq;
       public          postgres    false    3    209            c           0    0    person_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;
          public          postgres    false    210            �            1259    16392    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(200)
);
    DROP TABLE public.role;
       public         heap    postgres    false    3            �            1259    16395    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    211    3            d           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    212            �            1259    16462    session    TABLE     �   CREATE TABLE public.session (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token character varying(255) NOT NULL,
    begin integer,
    "end" integer,
    state character varying(255) NOT NULL
);
    DROP TABLE public.session;
       public         heap    postgres    false    3            �            1259    16461    sessions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          postgres    false    216    3            e           0    0    sessions_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.session.id;
          public          postgres    false    215            �            1259    16396    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying NOT NULL,
    email character varying(100) NOT NULL,
    role_id integer NOT NULL,
    person_id integer,
    loged boolean,
    attempts integer
);
    DROP TABLE public."user";
       public         heap    postgres    false    3            �            1259    16401    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    3    213            f           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    214            �           2604    16402 	   person id    DEFAULT     f   ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);
 8   ALTER TABLE public.person ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    16403    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    16465 
   session id    DEFAULT     i   ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 9   ALTER TABLE public.session ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    16404    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            T          0    16386    person 
   TABLE DATA           >   COPY public.person (id, firstname, lastname, age) FROM stdin;
    public          postgres    false    209   '       V          0    16392    role 
   TABLE DATA           5   COPY public.role (id, name, description) FROM stdin;
    public          postgres    false    211   �'       [          0    16462    session 
   TABLE DATA           J   COPY public.session (id, user_id, token, begin, "end", state) FROM stdin;
    public          postgres    false    216   �'       X          0    16396    user 
   TABLE DATA           d   COPY public."user" (id, username, password, email, role_id, person_id, loged, attempts) FROM stdin;
    public          postgres    false    213   �)       g           0    0    person_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.person_id_seq', 38, true);
          public          postgres    false    210            h           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 1, true);
          public          postgres    false    212            i           0    0    sessions_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sessions_id_seq', 40, true);
          public          postgres    false    215            j           0    0    user_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.user_id_seq', 135, true);
          public          postgres    false    214            �           2606    16406    person person_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.person DROP CONSTRAINT person_pkey;
       public            postgres    false    209            �           2606    16408    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    211            �           2606    16469    session sessions_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.session
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.session DROP CONSTRAINT sessions_pkey;
       public            postgres    false    216            �           2606    16410    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    213            �           1259    16411    fki_fk_persona_user    INDEX     K   CREATE INDEX fki_fk_persona_user ON public."user" USING btree (person_id);
 '   DROP INDEX public.fki_fk_persona_user;
       public            postgres    false    213            �           1259    16412    fki_i    INDEX     ;   CREATE INDEX fki_i ON public."user" USING btree (role_id);
    DROP INDEX public.fki_i;
       public            postgres    false    213            �           2606    16413    user fk_persona_user    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_persona_user FOREIGN KEY (person_id) REFERENCES public.person(id) NOT VALID;
 @   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_persona_user;
       public          postgres    false    209    3518    213            �           2606    16418    user fk_role_user    FK CONSTRAINT     {   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_role_user FOREIGN KEY (role_id) REFERENCES public.role(id) NOT VALID;
 =   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_role_user;
       public          postgres    false    211    213    3520            T   �   x�m�;�@E��^����� �f@S��4|
VO.��+Na�C~�Y��w�F%PZ��GPF�-�5L�D��m��F��n��N�S��;�N�S��;�N�S����e��V�\��7�F/�g�e��5�$��z��E����k9~G���~ �S��      V   $   x�3�LL����,.)JL�/�,��Q@����� E      [   �  x���ێ�0 ��k}M[Η���(�M��x�(�>�`v�M�k/�4m����2� "4Xw���#�����C+�5.\.U1��*
UC��`���J��}�i�z;^��8���ײ
�+ϐLը���l�3�ꭥ�-��B�v1�ӎ�:$4m��g�,���� ʨkdz-�U�>�4�q��u�&"( Y	�ߔC��s���zȈoT�2׏���L�8�����V���`;.�~�*漜�F8_�=(@��]% �����j�l���
��c\v�,��q��_ l�S����:*X�@^���[���@�O+���J�*靭0c���V�pv�*��R�/�f�@�,��taM}��^�.B49�%��g;~P$q ���ߩ��$�[�O4��{ǎ_%��&��b����,��c��v(y
_	���� �.ޚ�%���Y��n�m<�s��TU�G/��͚���:���ֱ,r�5��E�� �D����(Ï�      X   �   x����
�0���?���&�=y�zYC�ؤ�ړ_o(R��²�aC���q�d�QH7�>K����S��;� E��B"[g'bc��A�F��
]Pi���$/a%�s�b��2�I�F7/K\���ܯ)]�vE��V[��v�R��U1     