# Code bootcamp demon postgres-dockerfile

FROM postgres:12


# Kopioidaan tietokannan dumppi dockeriin 
COPY demo.sql demo.sql

RUN pg_createcluster 12 main
# Create a PostgreSQL role named ``docker`` with ``docker`` as the password and
# then create a database `docker` owned by the ``docker`` role.
# Note: here we use ``&&\`` to run commands one after the other - the ``\``
#       allows the RUN command to span multiple lines.
USER postgres
RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE DATABASE demo;" &&\
    psql demo --command "\c demo;" &&\
    psql demo --command "DROP SCHEMA IF EXISTS public CASCADE;" &&\
    pg_restore -1 -U postgres -d demo demo.sql

# Adjust PostgreSQL configuration so that remote connections to the
# database are possible.
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/12/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/12/main/postgresql.conf``
RUN echo "listen_addresses='*'" >> /etc/postgresql/12/main/postgresql.conf

# Expose the PostgreSQL port
EXPOSE 5432

# Add VOLUMEs to allow backup of config, logs and databases
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

# Set the default command to run when starting the container
CMD ["/usr/lib/postgresql/12/bin/postgres", "-D", "/var/lib/postgresql/12/main", "-c", "config_file=/etc/postgresql/12/main/postgresql.conf"]


