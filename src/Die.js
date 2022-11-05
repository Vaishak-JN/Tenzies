export function Die({ value, isHeld, holdDice, id }) {

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#ffffff"
    }

    const diceHold = () => {
        holdDice(id)
    }
    return (
        <div className="die" style={styles} onClick={diceHold}>
            <h2>{value}</h2>
        </div>
    );
}
