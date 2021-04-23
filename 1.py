import random
import os
import pygame, sys
from pygame.locals import *
#
a = []
a.append("тб")
a.append("тк")
a.append("тч")
a.append("тп")
a.append("кб")
a.append("кк")
a.append("кч")
a.append("кп")
a.append("дб")
a.append("дк")
a.append("дч")
a.append("дп")
a.append("вб")
a.append("вк")
a.append("вч")
a.append("вп")
a.append("10б")
a.append("10к")
a.append("10ч")
a.append("10п")
a.append("9б")
a.append("9к")
a.append("9ч")
a.append("9п")
a.append("8б")
a.append("8к")
a.append("8ч")
a.append("8п")
a.append("7б")
a.append("7к")
a.append("7ч")
a.append("7п")
a.append("6б")
a.append("6к")
a.append("6ч")
a.append("6п")
a.append("5б")
a.append("5к")
a.append("5ч")
a.append("5п")
a.append("4б")
a.append("4к")
a.append("4ч")
a.append("4п")
a.append("3б")
a.append("3к")
a.append("3ч")
a.append("3п")
a.append("2б")
a.append("2к")
a.append("2ч")
a.append("2п")
#
random.shuffle(a)
#
i=0
#while(i<len(a)):
  #print(a[i],end="")
  #input()
  #i+=1
#
pygame.init()
#
image1 = pygame.image.load(os.path.join('deck.png'))
#
screen = pygame.display.set_mode((400,400),0,32)
pygame.display.set_caption("Poker Dapok");

#(x,y,fontSize) = (10,40,40)
#myFont = pygame.font.SysFont("None", fontSize)
#fontColor = (255,255,0)
#bgColor = (255,255,255)
#fontImage = myFont.render(helloText, 0, (fontColor))
mainLoop = True
while mainLoop:
  for event in pygame.event.get():
    if event.type == QUIT:
      mainLoop = False
  #screen.fill(bgColor)
  #screen.blit(fontImage,(x,y))
  screen.blit(image1,(0,0))
  pygame.display.update()
pygame.quit()
