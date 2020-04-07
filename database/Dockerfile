FROM postgres:12


# Kopioidaan tietokannan dumppi dockeriin 
COPY . /docker-entrypoint-initdb.d

RUN chown -R postgres:postgres /docker-entrypoint-initdb.d

RUN pg_createcluster 12 main
USER postgres

RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE DATABASE demo;" &&\
    psql demo --command "\c demo;" &&\
    psql demo --command "DROP SCHEMA IF EXISTS public CASCADE;" &&\
    pg_restore -1 -U postgres -d demo /docker-entrypoint-initdb.d/demo.sql &&\
    psql --command "ALTER USER postgres WITH SUPERUSER PASSWORD 'postgres';"

# Adjust PostgreSQL configuration so that remote connections to the
# database are possible.
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/12/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/12/main/postgresql.conf``
RUN echo "listen_addresses='*'" >> /etc/postgresql/12/main/postgresql.conf

# Expose the PostgreSQL port
EXPOSE 5432

CMD ["/usr/lib/postgresql/12/bin/postgres", "-D", "/var/lib/postgresql/12/main", "-c", "config_file=/etc/postgresql/12/main/postgresql.conf"]

