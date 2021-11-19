from sre_parse import CATEGORIES

from django.db import models
from django.http import JsonResponse
from django.template.defaultfilters import slugify

# Create your models here.
class Categories(models.TextChoices):
    BUSINESS = 'business'
    DIY = 'diy'
    FASHION = 'fashion'
    FINANCE = 'finance'
    FITNESS = 'fitness'
    FOOD = 'food'
    GAMING = 'gaming'
    MUSIC = 'music'
    MOVIE = 'movie'
    NEWS = 'news'
    SCIENCE = 'science'
    SPORTS = 'sports'
    STYLE = 'style'
    TRAVEL = 'travel'
    WORLD = 'world'

class BlogPost(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField()
    category = models.CharField(max_length=255, choices=Categories.choices, default=Categories.WORLD)
    # must upload the image to a S3 bucket
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d')
    excerpt = models.CharField(max_length=255)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    content = models.TextField()
    featured = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)

        if self.featured == True:
            try:
                temp = BlogPost.objects.get(featured=True)
                print(temp)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

