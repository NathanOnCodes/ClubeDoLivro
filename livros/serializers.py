from rest_framework import serializers
from livros import models


class LivrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Livros
        fields = (
            'id_livro',
            'titulo',
            'autor',
            'ano_lancamento',
            'estado_livro',
            'paginas',
            'editora',
            'data_criacao'
        )