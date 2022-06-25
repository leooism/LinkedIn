
class SuperCar:
  def __init__(this, name, model, price):
    this.name = name
    this.model = model
    this.price = price

  def start(self):
    print(f'🔥🔥🔥🔥🔥Starting......🚔🚔🚔 {self.name} ')
  def price(self):
    print(f"The price of this modal is {self.price}")


def do_some_magics(*args, **kwargs):
  # print(args)
  print("\n")
  print(kwargs)
do_some_magics(1, 2, 3, 4, 5, num = 1)
car1 = SuperCar("Mercedes", "XX^", "345")
print(car1.name)
car1.start()
  
i = 1
# print(i += 1)







# Everything in python is object

# class CamelCase
# We instanciate and new instances are fomred.
# Dry principle is followed in OOP
# Class Object Attribute
# Self
# Init
# classmethod&&staticmethod

# Encapsulation
# binding all methods and attributes together 
# personal hiding


# Abstraction
# hiding implementation details





# Poly         morphism
# masu timi teslai bhanam na code mana haina aba timle thyo masu lai kati tarika le pakauna sakxau
# kahana sakxau 




# Inheritance
# heridity








# keeping method or attribute private we use _ before the name
# print(type(1))

# print(type("H"))

# print(type(True))

# print(type((1,234)))


class SuperCar:
  ## Class Attribute that is accessible to all instances of SuperCar
  
  model = "BMW"
  
  def __init__(self, name):
    self.name = name
  @classmethod
  def nitro(self):
    print("Starting Nitro Speed.❤️‍🔥❤️‍🔥❤️‍🔥")
  @staticmethod
  def acclerate(self, by):
    print(f"Acclearting by {by} meter persecond")


ResmanCar = SuperCar("Helloooo")
##ResmanCar is a instance of SuperCar
##This process is called instantiating

print(ResmanCar)
ShaillinaCar = SuperCar("I am the Boss")
print("YOooooooooooooooo")
print(ShaillinaCar)
print(isinstance(ResmanCar, SuperCar))

SuperCar.nitro()
# ResmanCar.showModal()
ResmanCar.acclerate(None,5)
# ResmanCar.nitro()

#Encapsulation means binding all methods and attributes together.
#In OOP we binds variables and functions together and this term is commonly known as encapsulation


class SuperMiniCar(SuperCar):
  def __init__(self, name, speed):
    self.name = name
    self.speed = speed

SumanCar = SuperMiniCar("SumanIsCuti", 45)

SumanCar.nitro()
SumanCar.acclerate(None, 56)
SuperMiniCar.acclerate(None, 56)


##Making attributes and methods private
##We use convention like _ before key or method name
class PrivateMessage:
  def __init__(self, message, person):
    self._message = message
    self._person = person
  def _sendMessage(self):
    print(f"Sending .........{self._message[len(self._message) - 1]} to {self._person}")
  


message1 = PrivateMessage("I love you", "Kuresh")
message1._sendMessage()


##Example of inheritance

class User:
  def __init__(self, name):
    self._name = name

  def attack(self):
    print(f"\n{self._name} is atacking With {self.power}")



class Wizard(User):
  def __init__(self, name, power, lifespan):
    super().__init__(name)
    ## User.__init__(self, name)
    self.power = power
    self.lifespan = lifespan


class Goblin(User):
  def __init__(self, name, power, lifespan):
    self.power = power
    self.lifespan = lifespan
    ##Super is refrencing to our parent class    
    super().__init__(name)


wiz1 = Wizard("Icy Wizard", "Ice Balls", "98")
wiz2 = Wizard("Fire Wizard", "Fire Balls", "97")

gob1 = Goblin("Mamma Mia", "Muscles", "99")
gob2 = Goblin("Pasta", "Muscles with Fun", "98")

wiz1.attack()

def deploying_troops():
  for soldiers in [wiz1, wiz2, gob1, gob2]:
     soldiers.attack()

command = input("Do you want to attack [Y/N]\n")
if command.capitalize() == "Y":
  deploying_troops()

  
##Polymorphism refers to many forms
##Here our troops have diffrent attacking strageties
  






#Data Typs
#   None
#   int
#   str
#   True
#   False

# a = 1
# b = 2
# c = a + b

# for(int x= 1  ; x<=1; x++)
# {
  
# }
# [1, 100]
  # range(initaValue, finalVale - 1)
# for x in range(1, 5):
#   print(x)

xy = 1

# while(xy <=10){
#   printf("%d", xy)
# }


# while xy<=10:
#   print("My name is kuresh\n")
#   xy = xy-1


# myList = ["Dipen", "Kuresh"]
myList = ["Dipen", "Kuresh", True, 12, 213]

for item in myList:
  print(item)

mytuple = (1, 3, 4, 5)
# print(len(my))
# print(mytuple[0])
# range(0 to n-1)
# x = 12;
# x = 124234123;






isGood = True

# if(isGood == True){
#   printf("")
# }


# if isGood == True:
#   print("")


# 0 None ""

# and or 




class Tesla:
  # CamelCase
  def __init__(self, name, price, speedRange):
    self.name = name
    self.price = price
    self.speedRange = speedRange
##Methods
    ##attributes
    
    #defining function
    ## len print reversed
    
    ##user define function
    
  def acclerate():
    print("Acclerating...........")





# car1 = Tesla("Dipen", "95$", "400km/hr")
# car2 = Tesla("Ritik", "345$","500km/hr" )

# print(car1.name)
# print("ho")
# car1.acclerate()

# print(car2.name)
# car2.acclerate()




class SuperTesla:
  def acclerate(self):
    print(f"Acclerating {self.speed}")

class MiniTesla(SuperTesla):
  def __init__(self,speed):
    self.speed = speed



class SuperMiniTesla(SuperTesla):
    def __init__(self,speed):
      self.speed = speed
  
minicar1 = MiniTesla("98")

minicar2 = SuperMiniTesla("87")
minicar1.acclerate()
minicar2.acclerate()

##



  
  
  















































