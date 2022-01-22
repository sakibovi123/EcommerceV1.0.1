from math import prod
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from .models import *
from django.views import View


class LoginView(View):
    def get(self, request):
        args = {}
        return render(request, "ecommerce/login.html", args)


class RegistrationView(View):
    def get(self, request):
        args = {}
        return render(request, "ecommerce/register.html", args)


class HomePageView(View):
    def get(self, request):
        cart = request.session.get("cart")
        site = SiteLogo.objects.first()
        print(site)
        # Landing Sliders
        sliders = LandingSlider.objects.filter(is_active=True)[:3]

        print("SLIDER LENGTH:", len(sliders))

        first_slider, second_slider, third_slider = None, None, None

        for i in range(len(sliders)):
            if i == 0:
                first_slider = sliders[i]
            elif i == 1:
                second_slider = sliders[i]
            else:
                third_slider = sliders[i]


        # Category Object
        category = Category.objects.all()
        cats = None
        if len(category) > 0:
            cats = Category.objects.filter(is_active=True)
        # Brand Object
        brand_brand = Brand.objects.all()
        brands = None
        if len(brand_brand) > 0:
            brands = Brand.objects.filter(is_active=True)
        # Product Object
        products = Product.objects.all()
        new_arrival_prods = None
        in_sale_prods = None
        best_sellers_prods = None
        if len(products) > 0:
            new_arrival_prods = Product.objects.filter(
                is_out_stock=False, is_new=True
            )
            in_sale_prods = Product.objects.filter(is_out_stock=False, is_in_sale=True)
            best_sellers_prods = Product.objects.filter(is_out_stock=False, is_best_sellers=True)

        # Cart Products
        if not cart:
            request.session.cart = {}
        cart_products = None
        if cart:
            ids = list(request.session.get("cart").keys())
            print(f"{ids=}")
            cart_products = Product.get_items(ids)

        args = {
            "site": site,
            "sliders": sliders,
            "cats": cats,
            "brands": brands,
            "new_arrival_prods": new_arrival_prods,
            "in_sale_prods": in_sale_prods,
            "best_sellers_prods": best_sellers_prods,
            "cart_products": cart_products,
            "first_slider": first_slider,
            "second_slider": second_slider,
            "third_slider": third_slider,
            "slider_length": len(sliders),
        }
        return render(request, "ecommerce/home.html", args)


        def post(self, request):
            args = {}
            return render(request, self.template_name, args)


class CategoryWiseProductView(View):
    template_name = "ecommerce/categoryWiseProduct.html"

    def get(self, request, cat_id):
        catId = get_object_or_404(Category, pk=cat_id)
        if catId.id is not None:
            try:
                product = Product.objects.filter(category=catId.id)
            except Product.DoesNotExist:
                return
        args = {
            "product": product,
            "catId": catId,
        }
        return render(request, self.template_name, args)


class ShopView(View):
    def get(self, request, *args, **kwargs):
        min_price, max_price = 0, 0
        products = Product.objects.all()
        categories = Category.objects.all()
        colors = Colors.objects.all()
        sizes = Size.objects.all()

        # Initial min price
        if len(products) > 0:
            if products[0].sale_price > 0:
                min_price = products[0].sale_price
            else:
                min_price = products[0].regular_price

        # Getting min price & max price
        for item in products:
            if item.regular_price > max_price:
                max_price = item.regular_price
            if item.sale_price > 0:
                if item.sale_price < min_price:
                    min_price = item.sale_price
            elif item.regular_price < min_price:
                min_price = item.regular_price

        args = {
            "categories": categories,
            "min_price": min_price,
            "max_price": max_price,
            "colors": colors,
            "sizes": sizes,
        }
        return render(request, "ecommerce/shop.html", args)


class CategoryView(View):
    def get(self, request):
        min_price, max_price = 0, 0
        products = Product.objects.all()
        categories = Category.objects.all()
        colors = Colors.objects.all()
        sizes = Size.objects.all()

        # Initial min price
        if len(products) > 0:
            if products[0].sale_price > 0:
                min_price = products[0].sale_price
            else:
                min_price = products[0].regular_price

        # Getting min price & max price
        for item in products:
            if item.regular_price > max_price:
                max_price = item.regular_price
            if item.sale_price > 0:
                if item.sale_price < min_price:
                    min_price = item.sale_price
            elif item.regular_price < min_price:
                min_price = item.regular_price

        args = {
            "categories": categories,
            "min_price": min_price,
            "max_price": max_price,
            "colors": colors,
            "sizes": sizes,
        }
        return render(request, "ecommerce/category.html", args)


class SubcategoryView(View):
    def get(self, request):
        min_price, max_price = 0, 0
        products = Product.objects.all()
        categories = Category.objects.all()
        colors = Colors.objects.all()
        sizes = Size.objects.all()

        # Initial min price
        if len(products) > 0:
            if products[0].sale_price > 0:
                min_price = products[0].sale_price
            else:
                min_price = products[0].regular_price

        # Getting min price & max price
        for item in products:
            if item.regular_price > max_price:
                max_price = item.regular_price
            if item.sale_price > 0:
                if item.sale_price < min_price:
                    min_price = item.sale_price
            elif item.regular_price < min_price:
                min_price = item.regular_price

        args = {
            "categories": categories,
            "min_price": min_price,
            "max_price": max_price,
            "colors": colors,
            "sizes": sizes,
        }
        return render(request, "ecommerce/subcategory.html", args)


class SearchPageView(View):
    def get(self, request):
        min_price, max_price = 0, 0
        products = Product.objects.all()
        categories = Category.objects.all()
        colors = Colors.objects.all()
        sizes = Size.objects.all()

        # Initial min price
        if len(products) > 0:
            if products[0].sale_price > 0:
                min_price = products[0].sale_price
            else:
                min_price = products[0].regular_price

        # Getting min price & max price
        for item in products:
            if item.regular_price > max_price:
                max_price = item.regular_price
            if item.sale_price > 0:
                if item.sale_price < min_price:
                    min_price = item.sale_price
            elif item.regular_price < min_price:
                min_price = item.regular_price

        args = {
            "categories": categories,
            "min_price": min_price,
            "max_price": max_price,
            "colors": colors,
            "sizes": sizes,
        }
        return render(request, "ecommerce/searchPage.html", args)


class FavoriteProductsView(View):
    template_name = "ecommerce/favouriteProducts.html"

    def get(self, request, *args, **kwargs):
        favs = FavoriteProduct.objects.filter(user=request.user)
        if len(favs)>0:
            fav_products = FavoriteProduct.objects.filter(user=request.user)
        args = {
            "favs": favs,
            "fav_products": fav_products,
        }
        return render(request, self.template_name, args)



class ProductDetailsView(View):
    template_name = ""
    def get(self, request, p_id, *args, **kwargs):
        productId = get_object_or_404(Product, pk=p_id)
        if productId is not None:
            product_details = Product.objects.get(id=productId.id)
            product_details.recently_viewed = True
            product_details.save()
        # Recently Viewed Products
        r_products = Product.objects.filter(
            recently_viewed=True
        )
        args = {
            "product_details": product_details,
            "r_products": r_products,
        }
        return render(request, self.template_name, args)


class CartView(View):
    def get(self, request, *args, **kwargs):
        cart = request.session.get("cart")
        if not cart:
            request.session.cart = {}
        cart_products = None
        if cart:
            ids = list(request.session.get("cart").keys())
            cart_products = Product.get_items(ids)
        args = {
            "cart_products": cart_products,
        }
        return render(request, "ecommerce/cart.html", args)


class CheckoutView(View):
    def get(self, request, *args, **kwargs):
        args = {}
        return render(request, "", args)

    def post(self, request, *args, **kwargs):
        cart = request.session.get("cart", None)
        ids = list(request.session.get("cart").keys())
        cart_products = Product.get_items(ids)
        user = request.user
        customer_name = request.POST.get("customer_name")
        customer_gmail = request.POST.get("customer_gmail")
        customer_phone = request.POST.get("customer_phone")
        address = request.POST.get("address")

        order = Order(
            user=user,
            customer_name=customer_name,
            customer_gmail=customer_gmail,
            customer_phone=customer_phone,
            address=CustomerAddress.objects.get(id=address)
        )
        order.save()
        grand_total = 0
        for p in cart_products:
            quantity = cart.get(str(p.id))
            if p.sale_price:
                grand_total += p.sale_price * quantity
            else:
                grand_total += p.regular_price * quantity

            p.stock_quantity -= quantity
            p.amount_sold += quantity
            if p.amount_sold > 10:
                p.is_best_sellers = True
            p.save()
            cartItems = CartItem(
                product=p,
                quantity=quantity
            )
            cartItems.save()
            Order.items.add(cartItems)
        order.grand_total = grand_total
        order.save()
        return redirect(f"")


class AllOrderView(View):
    template_name = ""
    def get(self, request, *args, **kwargs):
        # Order object
        orders = Order.objects.all()
        ors = None
        if len(orders) > 0:
            ors = Order.objects.filter(user=request.user)
        args = {
            "ors": ors,
        }
        return render(request, self.template_name, args)


class PaymentView(View):
    def get(self, request, *args, **kwargs):
        pass
    def post(self, request, *args, **kwargs):
        pass


class OrderDetailsView(View):
    template_name = ""
    def get(self, request, order_id, *args, **kwargs):
        get_order = Order.objects.get(pk=order_id)
        args = {
            "get_order": get_order,
        }

        return render(request, self.template_name, args)


"""
All Actions Goes here
"""


def add_to_cart(request):
    cart = request.session.get("cart")
    remove = request.POST.get("remove")
    product_id = request.POST.get("product_id")

    if product_id is not None:
        if cart:
            quantity = cart.get(product_id)
            if quantity:
                if remove:
                    cart[product_id] = quantity - 1
                else:
                    cart[product_id] = quantity + 1
            else:
                cart[product_id] = 1


        else:
            cart = {}
            cart[product_id] = 1
        request.session["cart"] = cart

        return redirect(f"/")


def plus_button(request):
    cart = request.session.get("cart")
    product_id = request.POST.get("product_id")
    if product_id is not None:
        if cart:
            quantity = cart.get(product_id)
            if quantity:
                cart[product_id] = quantity + 1
            else:
                cart[product_id] = 1
        else:
            cart = {}
            cart[product_id] = 1
        request.session["cart"] = cart
        return redirect("cart")


def minus_button(request):
    cart = request.session.get("cart")
    minus = request.POST.get("minus")
    product_id = request.POST.get("product_id")

    if product_id is not None:
        if cart:
            quantity = cart.get(product_id)
            if quantity:
                if minus:
                    cart[product_id] = quantity - 1
            else:
                cart[product_id] = 1
        else:
            cart = {}
            cart[product_id] = 1
        request.session["cart"] = cart
        return redirect("cart")


def delete_cart(request):

    cart = request.session.get("cart", None)
    product_id = request.POST.get("product_id")
    if request.method == "POST":
        if cart:
            cart.pop(product_id)
            request.session["cart"] = cart
            return redirect("cart")


def add_to_favorite(request):
    if request.method == "POST":
        product_id = request.POST.get("product_id")
        if product_id is not None:
            favorite = FavoriteProduct(
                user=request.user,
                product=Product.objects.get(id=product_id),
            )
            favorite.save()

            return redirect("home")


def get_orders_by_date(request):
    if request.method == "POST":
        from_date = request.POST.get("from_date")
        to_date = request.POST.get("to_date")
        data = Order.objects.filter(
            Q(created_date__exact=from_date) & Q(created_date__exact=to_date)
        )

    args = {
        "data": data,
    }
    return render(request, "", args)


def get_orders_by_status(request):
    if request.method == "POST":
        status_data = request.POST.get("status")
        data = Order.objects.filter(
            status__contains=status_data
        )
    args = {
        "data": data,
    }
    return render(request, "", args)
