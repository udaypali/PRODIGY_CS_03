import eel

eel.init('gui')

# Start the Eel application and open the HTML in the default browser
if __name__ == '__main__':
    # Adjust the size of the browser window
    eel.start('index.html', size=(1500, 800))