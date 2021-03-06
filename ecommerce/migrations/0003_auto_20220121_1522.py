# Generated by Django 3.2 on 2022-01-21 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0002_auto_20220121_1045'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_best_sellers',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='product',
            name='is_in_sale',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='product',
            name='is_new',
            field=models.BooleanField(default=True),
        ),
    ]
