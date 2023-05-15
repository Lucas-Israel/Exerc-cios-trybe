# python3 -m pip install SQLAlchemy
import os
import pandas as pd
from sqlalchemy import create_engine
from urllib.parse import quote
from dotenv import load_dotenv

load_dotenv()

MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")

database_url = "mysql+pymysql://root:%s@localhost:3306"

engine = create_engine(database_url % quote(MYSQL_PASSWORD))

df = pd.read_sql("SELECT * FROM books_api.books;", engine)

print(df.head())
