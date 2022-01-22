from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register([
    LicenseKey,
    Brand,
    Category,
    ExtraImage,
    Colors,
    Size,
    Product,
    CustomerAddress,
    CartItem,
    Order,
    FavoriteProduct,
    CampaignProduct,
    SiteLogo,
    LandingSlider,
])
