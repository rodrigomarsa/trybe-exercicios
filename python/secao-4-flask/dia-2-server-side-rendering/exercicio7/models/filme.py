from .db import db
from bson.objectid import ObjectId


class Filme:
    _collection = db["filmes"]

    def __init__(self, data):
        self.data = data

    @classmethod
    def buscar_filmes_por_titulo(cls, query={}):
        data = cls._collection.find(query)
        return [cls(d) for d in data]

    @classmethod
    def buscar_filmes_por_id(cls, id):
        data = cls._collection.find_one({"_id": ObjectId(id)})
        return cls(data) if data else None

    def to_dict(self):
        filme = {
            "titulo": self.data["titulo"],
            "ano": self.data["ano"],
            "diretor": self.data["diretor"],
            "genero": self.data["genero"],
            "poster": self.data["poster"],
            "_id": self.data["_id"],
        }
        return filme
