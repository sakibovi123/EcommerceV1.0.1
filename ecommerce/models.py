from django.db import models
from datetime import datetime, date
from django.contrib.auth.models import User

from django.db.models.aggregates import Max
# Create your models here.

class LicenseKey(models.Model):
    key = models.CharField(max_length=255)

    class Meta:
        ordering = ["-id"]
    
    def __str__(self):
        return self.key


class SiteLogo(models.Model):
    site_title = models.CharField(max_length=255, null=True, blank=True)
    site_logo = models.ImageField(upload_to="images/")

    def __str__(self):
        return str(self.id)


class LandingSlider(models.Model):
    slider_title = models.CharField(max_length=255, null=True, blank=True)
    slider_image = models.ImageField(upload_to="images/")
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return str(self.id)


class Shop(models.Model):
    shop_name = models.CharField(max_length=255)
    shop_logo = models.ImageField(upload_to="images/")

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.shop_name


class Brand(models.Model):
    brand_name = models.CharField(max_length=255)
    brand_logo = models.ImageField(upload_to="imgaes/", null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.brand_name


class Category(models.Model):
    category_name = models.CharField(max_length=255)
    category_image = models.ImageField(upload_to="images/", null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.category_name



class ExtraImage(models.Model):
    images = models.ImageField(upload_to="images/")

    def __str__(self):
        return str(self.id)


class Colors(models.Model):
    color_name = models.CharField(max_length=255)
    color_image = models.ImageField(upload_to="images/", null=True, blank=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.color_name


class Size(models.Model):
    size_name = models.CharField(max_length=255)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.size_name


class Product(models.Model):
    RANGE_CHOICES = (
        ("10000-50000", "10000-50000"),
        ("500000-100000", "500000-100000"),
        ("110000-200000", "110000-200000")
    )
    product_name = models.CharField(max_length=255)
    brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING, null=True, blank=True)
    regular_price = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    sale_price = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    stock_quantty = models.PositiveIntegerField(null=True, blank=True)
    is_out_stock = models.BooleanField(default=False)
    discount = models.FloatField(default=0.0)
    product_image = models.ImageField(upload_to="images/")
    extra_images = models.ManyToManyField(ExtraImage, null=True, blank=True)
    available_color = models.ManyToManyField(Colors, null=True, blank=True)
    shop = models.ForeignKey(Shop, on_delete=models.DO_NOTHING, null=True, blank=True)
    recently_viewed = models.BooleanField(default=False)
    range = models.CharField(max_length=255, null=True, choices=RANGE_CHOICES)
    # size = models.ForeignKey(Size, on_delete=models.DO_NOTHING, null=True, blank=True)
    
    is_new = models.BooleanField(default=True)
    is_in_sale = models.BooleanField(default=False)
    is_best_sellers = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.regular_price > self.sale_price:
            self.discount = (self.regular_price - self.sale_price) / 100
        super(Product, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.product_name

    @staticmethod
    def get_items(ids):
        return Product.objects.filter(id__in=ids)


class CustomerAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    address_field = models.TextField()

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return str(self.id)


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quanitty = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.product.product_name


class Order(models.Model):
    STATUS_CHOICE = (
        ("PENDING", "PENDING"),
        ("PROCESSING", "PROCESSING"),
        ("DELIVERED", "DELIVERED")
    )
    created_date = models.DateField(default=date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    customer_name = models.CharField(max_length=255)
    customer_gmail = models.EmailField(null=True, blank=True)
    customer_phone = models.CharField(max_length=255, null=True, blank=True)
    address = models.ForeignKey(CustomerAddress, on_delete=models.DO_NOTHING)
    items = models.ManyToManyField(CartItem)
    sub_total = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    grand_total = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    status = models.CharField(max_length=255, null=True, choices=STATUS_CHOICE)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.customer_name


class FavoriteProduct(models.Model):
    created_at = models.DateTimeField(default=datetime.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return str(self.product.product_name)


class CampaignProduct(models.Model):
    created_at = models.DateTimeField(default=datetime.now)
    campaign_title = models.CharField(max_length=255)
    product = models.ManyToManyField(Product)
    ended_time = models.DateTimeField()

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.campaign_title


