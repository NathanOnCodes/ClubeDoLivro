from django.db import models
from uuid import uuid4

class Livros(models.Model):
    id_livro = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    titulo = models.charField(max_length=255)
    autor = models.charField(max_length=255)
    ano_lancamento = models.IntegerField()
    estado_livro = models.charField(max_length=50)
    paginas = models.IntegerField()
    editora = models.charField(max_length=255)
    data_criacao = models.DateTimeField(auto_now_add=True)

    
