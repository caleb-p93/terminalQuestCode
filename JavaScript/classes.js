class Materializer
{
    constructor(targetName)
    {
        this.target = targetName;
        this.activated = false;
    }

    materialize()
    {
        if ( this.activated === true )
        {
            return this.target;
        }
        else
        {
            return;
        }
    }

    activate()
    {
        this.activated = true;
    }
}